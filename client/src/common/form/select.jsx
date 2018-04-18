import React from 'react'
import _ from 'lodash'

import './select.css'

class Select extends React.PureComponent {
  id = _.uniqueId('select')

  render() {
    const { onChange, models, className, children, ...rest } = this.props

    const containerClassNames = _.compact(['select-container', className]).join(' ')

    return (
      <div className={containerClassNames}>
        <label htmlFor={this.id}>
          <strong>{children}</strong>
        </label>

        <select
          className="form-control"
          onChange={event => onChange(event.target.value)}
          id={this.id}
          {...rest}
        >
          {models.map(model => (
            <option
              key={model.value}
              value={model.value}
            >
              {model.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default Select
