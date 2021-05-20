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

const SortIcon = ({ isSorting, direction }: { isSorting: boolean; direction: SortDirection }) => {
  if (!isSorting) {
    return <FontAwesomeIcon icon="sort" className="ms-2" />
  }

  if (direction === SortDirection.ascending) {
    return <FontAwesomeIcon icon="sort-up" className="ms-2" />
  }

  return <FontAwesomeIcon icon="sort-down" className="ms-2" />
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
      <SortIcon isSorting={sortKey === values.sortKey} direction={values.sortDirection} />
    </Link>
  )
}
