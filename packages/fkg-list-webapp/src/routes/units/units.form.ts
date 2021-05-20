import { array, number, object, SchemaOf, string } from 'yup'
import queryString from 'query-string'
import { validateYupSchema, yupToFormErrors } from 'formik'
import { Unit } from 'fkg-list-types'

import { FormData, SortDirection } from '../../types'

// @ts-expect-error
export const validationSchema: SchemaOf<FormData.FilterUnits> = object({
  keyword: string().required(),
  star: array()
    .of(number().oneOf([2, 3, 4, 5, 6]))
    .required(),
  sortKey: string().required().oneOf(['totalStats', 'code', 'star', 'attack', 'defense', 'hp']),
  sortDirection: string().oneOf([SortDirection.ascending, SortDirection.descending]).required(),
  attribute: array()
    .of(number().oneOf([Unit.Attribute.blue, Unit.Attribute.red, Unit.Attribute.violet, Unit.Attribute.yellow]))
    .required(),
  favorite: array()
    .of(number().oneOf([Unit.Favorite.book, Unit.Favorite.cake, Unit.Favorite.doll, Unit.Favorite.jewel]))
    .required(),
})

export const initialValues: FormData.FilterUnits = {
  keyword: '',
  attribute: [],
  favorite: [],
  sortDirection: SortDirection.ascending,
  sortKey: 'totalStats',
  star: [],
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
  }

  return validateYupSchema(form, validationSchema)
    .then(() => {
      return validationSchema.cast(form) as any
    })
    .catch((yupErrors, ...args) => {
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
  }
  return queryString.stringify(params)
}
