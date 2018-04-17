import React from 'react'
import _ from 'lodash'

import './checkbox.css'

export default class Checkbox extends React.PureComponent {
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
