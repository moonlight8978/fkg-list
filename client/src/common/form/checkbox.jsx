import React from 'react'
import _ from 'lodash'

import './checkbox.css'

function CheckboxGroup({ className, children }) {
  const groupClassNames = _.compact(['checkbox-group', className]).join(' ')

  return (
    <div className={groupClassNames}>
      {children}
    </div>
  )
}

class Checkbox extends React.PureComponent {
  id = _.uniqueId('checkbox')

  render() {
    const { onChange, children, className, labelClassName, ...rest } = this.props

    const inputClassNames = _.compact(['custom-control-input', className]).join(' ')
    const labelClassNames = _.compact(['custom-control-label', labelClassName]).join(' ')

    return (
      <div className="custom-control custom-checkbox">
        <input
          id={this.id}
          className={inputClassNames}
          type="checkbox"
          onChange={(event) => onChange(event.target.checked)}
          {...rest}
        />

        <label
          className={labelClassNames}
          htmlFor={this.id}
        >
          {children}
        </label>
      </div>
    )
  }
}

export { Checkbox, CheckboxGroup }
