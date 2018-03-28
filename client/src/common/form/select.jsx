import React from 'react'

class Select extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.value !== nextProps.value)
  }

  render() {
    console.log('re-render')
    const { name, value, onChange, optionsMap } = this.props

    let options = []

    optionsMap.forEach((value, key) => {
      options.push(<option key={key} value={key}>{value}</option>)
    })

    return (
      <div className="form-group">
        <label>{name}</label>
        <select
          className="form-control"
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>Please select one...</option>
          {options}
        </select>
      </div>
    )
  }
}

export default Select
