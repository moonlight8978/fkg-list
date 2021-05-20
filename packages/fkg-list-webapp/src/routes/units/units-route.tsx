import { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Formik } from 'formik'
import { forceCheck as forceLazyload } from 'react-lazyload'
import { FormattedMessage, useIntl } from 'react-intl'
import styled from 'styled-components'

import Layout from '../../components/layout'
import { routePaths } from '../../config/route-defs'
import { FlowerKnightGirl, FormData } from '../../types'
import { UnitApi } from '../../api/unit-api'
import { useTitle } from '../../utils/page-title'
import { RemoteData, useRemoteData } from '../../components/remote-data'
import { Loading } from '../../components/loading'

import { fromQuery, initialValues, toQuery } from './units.form'
import { FilterForm } from './components/filter-form'
import { UnitList } from './components/unit-list'
import { SortableCol } from './components/sortable-col'

const HorizontalScrollableTable = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
`

export default function UnitsRoute() {
  const { search } = useLocation()
  const history = useHistory()
  const [formInitialValues, setFormInitialValues] = useState<FormData.FilterUnits>(initialValues)
  const intl = useIntl()

  useTitle(intl.formatMessage({ id: 'routes.units.title' }))

  const fetchUnit = useCallback<() => Promise<FlowerKnightGirl[]>>(async () => {
    const form = await fromQuery(search)
    setFormInitialValues(form)
    return UnitApi.fetchAll(form)
  }, [search])
  const [isFetching, units] = useRemoteData(fetchUnit, [])

  useEffect(() => {
    forceLazyload()
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
          <FilterForm
            onReset={() =>
              history.push({
                pathname: routePaths.units,
                search: toQuery(initialValues),
              })
            }
          />
          <HorizontalScrollableTable>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">{}</th>
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
                    <SortableCol sortKey="star">
                      <FormattedMessage id="unit.rarity" />
                    </SortableCol>
                  </th>
                  <th scope="col">
                    <SortableCol sortKey="totalStats">
                      <FormattedMessage id="unit.totalStats" />
                    </SortableCol>
                  </th>
                  <th scope="col">
                    <SortableCol sortKey="hp">
                      <FormattedMessage id="unit.hp" />
                    </SortableCol>
                  </th>
                  <th scope="col">
                    <SortableCol sortKey="attack">
                      <FormattedMessage id="unit.attack" />
                    </SortableCol>
                  </th>
                  <th scope="col">
                    <SortableCol sortKey="defense">
                      <FormattedMessage id="unit.defense" />
                    </SortableCol>
                  </th>
                  <th scope="col">
                    <FormattedMessage id="unit.favorite" />
                  </th>
                </tr>
              </thead>
              <RemoteData fetching={isFetching} fallback={null}>
                <UnitList units={units} />
              </RemoteData>
            </table>
          </HorizontalScrollableTable>
          <RemoteData fetching={isFetching} fallback={<Loading size="2x" />} />
        </>
      </Formik>
    </Layout>
  )
}
