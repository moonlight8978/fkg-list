import { array, number, object, SchemaOf, string } from 'yup'
import queryString from 'query-string'
import { validateYupSchema, yupToFormErrors } from 'formik'

import { FormData, SortDirection } from '../../types'
import {
  familyValues,
  enhancementValues,
  upgradabilityValues,
  favoriteValues,
  attributeValues,
  rarityValues,
} from '../../domain/unit'

// @ts-expect-error
export const validationSchema: SchemaOf<FormData.FilterUnits> = object({
  keyword: string().required(),
  star: array().of(number().oneOf(rarityValues)).required(),
  sortKey: string().required().oneOf(['totalStats', 'code', 'star', 'attack', 'defense', 'hp']),
  sortDirection: string().oneOf([SortDirection.ascending, SortDirection.descending]).required(),
  attribute: array().of(number().oneOf(attributeValues)).required(),
  favorite: array().of(number().oneOf(favoriteValues)).required(),
  family: array().of(number().oneOf(familyValues)).required(),
  enhancement: array().of(number().oneOf(enhancementValues)).required(),
  upgradability: array().of(number().oneOf(upgradabilityValues)).required(),
})

export const initialValues: FormData.FilterUnits = {
  keyword: '',
  attribute: [],
  favorite: [],
  sortDirection: SortDirection.ascending,
  sortKey: 'totalStats',
  star: [],
  family: [],
  enhancement: [],
  upgradability: [],
}

export const fromQuery = async (query: string): Promise<FormData.FilterUnits> => {
  const params = queryString.parse(query)
  const form = {
    keyword: params.q,
    star: params.rarity && [params.rarity].flat(),
    sortKey: params.sort,
    sortDirection: params.order,
    favorite: params.favorite && [params.favorite].flat(),
    attribute: params.attribute && [params.attribute].flat(),
    upgradability: params.upgradability && [params.upgradability].flat(),
    family: params.family && [params.family].flat(),
    enhancement: params.enhancement && [params.enhancement].flat(),
  }

  return validateYupSchema(form, validationSchema)
    .then(() => {
      return validationSchema.cast(form) as any
    })
    .catch((yupErrors) => {
      const errors = yupToFormErrors<FormData.FilterUnits>(yupErrors)
      return Object.fromEntries(
        Object.entries(initialValues).map(([attr, value]) => {
          // @ts-expect-error
          if (errors[attr]) {
            return [attr, value]
          }

          return [attr, validationSchema.pick([attr]).cast(form)[attr]]
        })
      )
    })
}

export const toQuery = (form: FormData.FilterUnits) => {
  const params = {
    q: form.keyword,
    rarity: form.star,
    sort: form.sortKey,
    order: form.sortDirection,
    favorite: form.favorite,
    attribute: form.attribute,
    enhancement: form.enhancement,
    upgradability: form.upgradability,
    family: form.family,
  }
  return queryString.stringify(params)
}
