import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { HTMLProps } from 'react'

import { breakpoints } from '../../../config/bootstrap'

const ResponsiveSelect = styled.select`
  min-width: 120px;
  @media (min-width: ${breakpoints.md}) {
    min-width: 200px;
  }
`

const getSelectValue = (value: any[]) => {
  if (value.length > 0) {
    return {
      value: value.map((v) => v.toString()),
    }
  }

  return {
    defaultValue: [''],
  }
}

interface Props extends HTMLProps<HTMLSelectElement> {
  value: any[]
}

export function MultipleSelect({ children, value, ref, as, ...props }: Props) {
  const intl = useIntl()

  return (
    <ResponsiveSelect {...props} className="form-select w-auto mx-auto" multiple {...getSelectValue(value)}>
      <option value="">{intl.formatMessage({ id: 'routes.units.selectAll' })}</option>
      {children}
    </ResponsiveSelect>
  )
}
