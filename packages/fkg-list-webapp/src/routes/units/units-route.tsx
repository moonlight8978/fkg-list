import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Formik } from 'formik'

import Layout from '../../components/layout'
import { routePaths } from '../../config/route-defs'
import { FlowerKnightGirl, FormData } from '../../types'
import { UnitApi } from '../../api/unit-api'

import { fromQuery, initialValues, toQuery } from './units.form'
import FilterForm from './components/filter-form'
import { attributeText, favoriteText, totalStats } from './units.utils'

export default function UnitsRoute() {
  const { search } = useLocation()
  const history = useHistory()
  const [units, setUnits] = useState<FlowerKnightGirl[]>([])
  const [formInitialValues, setFormInitialValues] = useState<FormData.FilterUnits>(initialValues)

  useEffect(() => {
    async function fetchUnits() {
      const form = await fromQuery(search)
      setFormInitialValues(form)
      const response = await UnitApi.fetchAll(form)
      setUnits(response)
    }

    fetchUnits()
  }, [search])

  return (
    <Layout>
      <Formik
        initialValues={formInitialValues}
        onSubmit={(form) => {
          history.push({
            pathname: routePaths.units,
            search: toQuery(form),
          })
        }}
        enableReinitialize
      >
        <FilterForm />
      </Formik>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">名前</th>
            <th scope="col">属性</th>
            <th scope="col">レア度</th>
            <th scope="col">総合力</th>
            <th scope="col">HP</th>
            <th scope="col">攻撃力</th>
            <th scope="col">防御力</th>
            <th scope="col">好きな物</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => (
            <tr key={unit.id}>
              <td>{unit.code}</td>
              <td>{unit.name}</td>
              <td>{attributeText(unit.attribute)}</td>
              <td>★{unit.star}</td>
              <td>{totalStats(unit)}</td>
              <td>{unit.hp}</td>
              <td>{unit.attack}</td>
              <td>{unit.defense}</td>
              <td>{favoriteText(unit.favorite)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
