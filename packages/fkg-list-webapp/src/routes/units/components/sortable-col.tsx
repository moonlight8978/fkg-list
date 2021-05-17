import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormikContext } from 'formik'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { routePaths } from '../../../config/route-defs'
import { FormData, SortDirection } from '../../../types'
import { toQuery } from '../units.form'

interface Props {
  sortKey: string
  children: ReactNode
}

export function SortableCol({ sortKey, children }: Props) {
  const { values } = useFormikContext<FormData.FilterUnits>()

  return (
    <Link
      to={{
        pathname: routePaths.units,
        search: toQuery({
          ...values,
          sortDirection:
            values.sortDirection === SortDirection.ascending ? SortDirection.descending : SortDirection.ascending,
          sortKey,
        }),
      }}
      className="text-decoration-none"
    >
      <span className="link-dark">{children}</span>
      <FontAwesomeIcon icon="sort" className="ms-2" />
    </Link>
  )
}
