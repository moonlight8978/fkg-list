import { Unit } from 'fkg-list-types'
import { Field, Form, useFormikContext } from 'formik'
import { FormattedMessage, useIntl } from 'react-intl'
import styled from 'styled-components'

import { FormData } from '../../../types'
import {
  attributeColor,
  familyValues,
  enhancementValues,
  upgradabilityValues,
  favoriteValues,
  attributeValues,
  rarityValues,
} from '../../../domain/unit'

import { MultipleSelect } from './select'

const KeywordLabel = styled.label`
  word-break: keep-all;
`

export function FilterForm({ onReset }: { onReset: () => void }) {
  const { handleChange, values } = useFormikContext<FormData.FilterUnits>()
  const intl = useIntl()

  return (
    <Form className="mt-4">
      <div className="mb-3 row">
        <KeywordLabel htmlFor="keyword" className="col col-form-label flex-grow-0">
          <FormattedMessage id="routes.units.keyword" />
        </KeywordLabel>

        <div className="col">
          <Field
            type="text"
            className="form-control"
            name="keyword"
            placeholder={intl.formatMessage({ id: 'routes.units.keyword.placeholder' })}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-sm-4 text-center">
          <label className="mx-auto">
            <FormattedMessage id="unit.rarity" />
          </label>
          <MultipleSelect onChange={handleChange('star')} value={values.star}>
            {rarityValues.map((rarity) => (
              <option value={rarity} key={rarity.toString()}>
                {intl.formatMessage({ id: 'unit.rarity.value' }, { value: rarity })}
              </option>
            ))}
          </MultipleSelect>
        </div>

        <div className="col-6 col-sm-4 text-center">
          <label className="mx-auto">
            <FormattedMessage id="unit.attribute" />
          </label>
          <MultipleSelect onChange={handleChange('attribute')} value={values.attribute}>
            {attributeValues.map((attribute) => (
              <option value={attribute} key={attribute.toString()} style={{ color: attributeColor({ attribute }) }}>
                {intl.formatMessage({ id: `unit.attribute.${Unit.Attribute[attribute]}` })}
              </option>
            ))}
          </MultipleSelect>
        </div>

        <div className="col-6 col-sm-4 text-center mt-3 mt-sm-0">
          <label className="mx-auto">
            <FormattedMessage id="unit.favorite" />
          </label>
          <MultipleSelect onChange={handleChange('favorite')} value={values.favorite}>
            {favoriteValues.map((favorite) => (
              <option value={favorite} key={favorite.toString()}>
                {intl.formatMessage({ id: `unit.favorite.${Unit.Favorite[favorite]}` })}
              </option>
            ))}
          </MultipleSelect>
        </div>

        <div className="col-6 col-sm-4 text-center mt-3">
          <label className="mx-auto">
            <FormattedMessage id="unit.family" />
          </label>
          <MultipleSelect onChange={handleChange('family')} value={values.family}>
            {familyValues.map((family) => (
              <option value={family} key={family.toString()}>
                {intl.formatMessage({ id: `unit.family.${Unit.Family[family]}` })}
              </option>
            ))}
          </MultipleSelect>
        </div>

        <div className="col-6 col-sm-4 text-center mt-3">
          <label className="mx-auto">
            <FormattedMessage id="unit.enhancement" />
          </label>
          <MultipleSelect onChange={handleChange('enhancement')} value={values.enhancement}>
            {enhancementValues.map((enhancement) => (
              <option value={enhancement} key={enhancement.toString()}>
                {intl.formatMessage({ id: `unit.enhancement.${Unit.Enhancement[enhancement]}` })}
              </option>
            ))}
          </MultipleSelect>
        </div>

        <div className="col-6 col-sm-4 text-center mt-3">
          <label className="mx-auto">
            <FormattedMessage id="unit.upgradability" />
          </label>
          <MultipleSelect onChange={handleChange('upgradability')} value={values.upgradability}>
            {upgradabilityValues.map((upgradability) => (
              <option value={upgradability} key={upgradability.toString()}>
                {intl.formatMessage({ id: `unit.upgradability.${Unit.Upgradability[upgradability]}` })}
              </option>
            ))}
          </MultipleSelect>
        </div>
      </div>

      <div className="text-center my-4">
        <button type="button" className="btn btn-secondary me-3" onClick={onReset}>
          <FormattedMessage id="routes.units.reset" />
        </button>

        <button type="submit" className="btn btn-primary">
          <FormattedMessage id="routes.units.submit" />
        </button>
      </div>
    </Form>
  )
}
