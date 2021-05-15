import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormikContext } from 'formik'
import { Link } from 'react-router-dom'

import { routePaths } from '../../../config/route-defs'
import { FormData, SortDirection } from '../../../types'
import { toQuery } from '../units.form'

interface Props {
  sortKey: string
}

export function SortIcon({ sortKey }: Props) {
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
    >
      <FontAwesomeIcon icon="sort" className="ms-2" />
    </Link>
  )
}
