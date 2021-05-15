import { Unit } from 'fkg-list-types'
import { Field, Form, useFormikContext } from 'formik'
import { toString } from 'lodash'
import styled from 'styled-components'

import { FormData } from '../../../types'
import { attributeText, favoriteText } from '../units.utils'

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

export default function FilterForm() {
  const { handleChange, values } = useFormikContext<FormData.FilterUnits>()

  return (
    <Form className="mt-4">
      <div className="mb-3 row">
        <label htmlFor="keyword" className="col col-form-label flex-grow-0">
          Keyword
        </label>

        <div className="col">
          <Field type="text" className="form-control" name="keyword" placeholder="Unit ID or Name" />
        </div>
      </div>
      {/* <div className="form-check form-check-inline">
        <Field type="checkbox" name="star" value={Unit.Attribute.blue} className="form-check-input" />
        <label className="form-check-label">{attributeText(Unit.Attribute.blue)}</label>
      </div>
      <div className="form-check form-check-inline">
        <Field type="checkbox" name="star" value={Unit.Attribute.red} className="form-check-input" />
        <label className="form-check-label">{attributeText(Unit.Attribute.red)}</label>
      </div>
      <div className="form-check form-check-inline">
        <Field type="checkbox" name="star" value={Unit.Attribute.yellow} className="form-check-input" />
        <label className="form-check-label">{attributeText(Unit.Attribute.yellow)}</label>
      </div>
      <div className="form-check form-check-inline">
        <Field type="checkbox" name="star" value={Unit.Attribute.violet} className="form-check-input" />
        <label className="form-check-label">{attributeText(Unit.Attribute.violet)}</label>
      </div> */}
      <div className="row">
        <div className="col-4 text-center">
          <label className="mx-auto">レアリティー</label>
          <Select
            className="form-select w-auto mx-auto"
            multiple
            aria-label="multiple select example"
            onChange={handleChange('star')}
            {...getSelectValue(values.star)}
          >
            <option value="">すべて</option>
            <option value="2">★2</option>
            <option value="3">★3</option>
            <option value="4">★4</option>
            <option value="5">★5</option>
            <option value="6">★6</option>
          </Select>
        </div>

        <div className="col-4 text-center">
          <label className="mx-auto">属性</label>
          <Select
            className="form-select w-auto mx-auto"
            multiple
            aria-label="multiple select example"
            onChange={handleChange('attribute')}
            {...getSelectValue(values.attribute)}
          >
            <option value="">すべて</option>
            <option value={Unit.Attribute.blue}>{attributeText(Unit.Attribute.blue)}</option>
            <option value={Unit.Attribute.red}>{attributeText(Unit.Attribute.red)}</option>
            <option value={Unit.Attribute.yellow}>{attributeText(Unit.Attribute.yellow)}</option>
            <option value={Unit.Attribute.violet}>{attributeText(Unit.Attribute.violet)}</option>
          </Select>
        </div>

        <div className="col-4 text-center">
          <label className="mx-auto">好きな物</label>
          <Select
            className="form-select w-auto mx-auto"
            multiple
            aria-label="multiple select example"
            onChange={handleChange('favorite')}
            {...getSelectValue(values.favorite)}
          >
            <option value="">すべて</option>
            <option value={Unit.Favorite.book}>{favoriteText(Unit.Favorite.book)}</option>
            <option value={Unit.Favorite.cake}>{favoriteText(Unit.Favorite.cake)}</option>
            <option value={Unit.Favorite.doll}>{favoriteText(Unit.Favorite.doll)}</option>
            <option value={Unit.Favorite.jewel}>{favoriteText(Unit.Favorite.jewel)}</option>
          </Select>
        </div>
      </div>

      <div className="text-center my-4">
        <button type="submit" className="btn btn-primary">
          Filter
        </button>
      </div>
    </Form>
  )
}
