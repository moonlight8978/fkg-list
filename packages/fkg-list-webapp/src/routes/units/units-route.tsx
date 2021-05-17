import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Formik } from 'formik'

import Layout from '../../components/layout'
import { routePaths } from '../../config/route-defs'
import { FlowerKnightGirl, FormData } from '../../types'
import { UnitApi } from '../../api/unit-api'

import { fromQuery, initialValues, toQuery } from './units.form'
import { FilterForm } from './components/filter-form'
import { UnitList } from './components/unit-list'
import { SortableCol } from './components/sortable-col'

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
  }, [search, setUnits])

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
        <>
          <FilterForm />
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">
                  <SortableCol sortKey="code">#</SortableCol>
                </th>
                <th scope="col">アバター</th>
                <th scope="col">名前</th>
                <th scope="col">属性</th>
                <th scope="col">レア度</th>
                <th scope="col">
                  <SortableCol sortKey="totalStats">総合力</SortableCol>
                </th>
                <th scope="col">HP</th>
                <th scope="col">攻撃力</th>
                <th scope="col">防御力</th>
                <th scope="col">好きな物</th>
              </tr>
            </thead>
            <tbody>
              <UnitList units={units} />
            </tbody>
          </table>
        </>
      </Formik>
    </Layout>
  )
}
