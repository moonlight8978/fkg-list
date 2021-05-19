import { Unit } from 'fkg-list-types'
import { Field, Form, useFormikContext } from 'formik'
import { toString } from 'lodash'
import { FormattedMessage, useIntl } from 'react-intl'
import styled from 'styled-components'

import { FormData } from '../../../types'

const Select = styled.select`
  min-width: 200px;
`

const getSelectValue = (value: any[]) => {
  if (value.length > 0) {
    return {
      value: value.map(toString),
    }
  }

  return {
    defaultValue: [''],
  }
}

const KeywordLabel = styled.label`
  word-break: keep-all;
`

export function FilterForm() {
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
        <div className="col-4 text-center">
          <label className="mx-auto">
            <FormattedMessage id="unit.rarity" />
          </label>
          <Select
            className="form-select w-auto mx-auto"
            multiple
            aria-label="multiple select example"
            onChange={handleChange('star')}
            {...getSelectValue(values.star)}
          >
            <option value="">{intl.formatMessage({ id: 'routes.units.selectAll' })}</option>
            {[2, 3, 4, 5, 6].map((rarity) => (
              <option value={rarity} key={rarity.toString()}>
                {intl.formatMessage({ id: 'unit.rarity.value' }, { value: rarity })}
              </option>
            ))}
          </Select>
        </div>

        <div className="col-4 text-center">
          <label className="mx-auto">
            <FormattedMessage id="unit.attribute" />
          </label>
          <Select
            className="form-select w-auto mx-auto"
            multiple
            aria-label="multiple select example"
            onChange={handleChange('attribute')}
            {...getSelectValue(values.attribute)}
          >
            <option value="">{intl.formatMessage({ id: 'routes.units.selectAll' })}</option>
            {[Unit.Attribute.blue, Unit.Attribute.red, Unit.Attribute.violet, Unit.Attribute.yellow].map(
              (attribute) => (
                <option value={attribute} key={attribute.toString()}>
                  {intl.formatMessage({ id: `unit.attribute.${Unit.Attribute[attribute]}` })}
                </option>
              )
            )}
          </Select>
        </div>

        <div className="col-4 text-center">
          <label className="mx-auto">
            <FormattedMessage id="unit.favorite" />
          </label>
          <Select
            className="form-select w-auto mx-auto"
            multiple
            aria-label="multiple select example"
            onChange={handleChange('favorite')}
            {...getSelectValue(values.favorite)}
          >
            <option value="">{intl.formatMessage({ id: 'routes.units.selectAll' })}</option>
            {[Unit.Favorite.book, Unit.Favorite.cake, Unit.Favorite.doll, Unit.Favorite.jewel].map((favorite) => (
              <option value={favorite} key={favorite.toString()}>
                {intl.formatMessage({ id: `unit.favorite.${Unit.Favorite[favorite]}` })}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="text-center my-4">
        <button type="submit" className="btn btn-primary">
          <FormattedMessage id="routes.units.submit" />
        </button>
      </div>
    </Form>
  )
}
