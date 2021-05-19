import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Formik } from 'formik'
import { forceCheck } from 'react-lazyload'
import { FormattedMessage, useIntl } from 'react-intl'

import Layout from '../../components/layout'
import { routePaths } from '../../config/route-defs'
import { FlowerKnightGirl, FormData } from '../../types'
import { UnitApi } from '../../api/unit-api'
import { useTitle } from '../../utils/page-title'

import { fromQuery, initialValues, toQuery } from './units.form'
import { FilterForm } from './components/filter-form'
import { UnitList } from './components/unit-list'
import { SortableCol } from './components/sortable-col'

export default function UnitsRoute() {
  const { search } = useLocation()
  const history = useHistory()
  const [units, setUnits] = useState<FlowerKnightGirl[]>([])
  const [formInitialValues, setFormInitialValues] = useState<FormData.FilterUnits>(initialValues)
  const intl = useIntl()

  useTitle(intl.formatMessage({ id: 'routes.units.title' }))

  useEffect(() => {
    async function fetchUnits() {
      const form = await fromQuery(search)
      setFormInitialValues(form)
      const response = await UnitApi.fetchAll(form)
      setUnits(response)
    }

    fetchUnits()
  }, [search, setUnits])

  useEffect(() => {
    forceCheck()
  }, [units])

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
                  <SortableCol sortKey="code">
                    <FormattedMessage id="unit.code" />
                  </SortableCol>
                </th>
                <th scope="col">
                  <FormattedMessage id="unit.images" />
                </th>
                <th scope="col">
                  <FormattedMessage id="unit.name" />
                </th>
                <th scope="col">
                  <FormattedMessage id="unit.attribute" />
                </th>
                <th scope="col">
                  <FormattedMessage id="unit.rarity" />
                </th>
                <th scope="col">
                  <SortableCol sortKey="totalStats">
                    <FormattedMessage id="unit.totalStats" />
                  </SortableCol>
                </th>
                <th scope="col">
                  <FormattedMessage id="unit.hp" />
                </th>
                <th scope="col">
                  <FormattedMessage id="unit.attack" />
                </th>
                <th scope="col">
                  <FormattedMessage id="unit.defense" />
                </th>
                <th scope="col">
                  <FormattedMessage id="unit.favorite" />
                </th>
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
