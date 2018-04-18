import React from 'react'
import _ from 'lodash'

import './slider.css'

const $ = window.$

class Slider extends React.PureComponent {
  ref = React.createRef()

  componentDidMount() {
    this.$el = $(this.ref.current)

    const { min, max, value, onChange } = this.props

    this.$el.slider({
      range: true,
      min: min,
      max: max,
      values: value,
      slide: (event, ui) => {
        onChange(ui.values)
      },
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.props
    this.$el.slider('values', value)
  }

  componentWillUnmount() {
    this.$el.slider('destroy')
  }

  render() {
    const { value, min, max, className } = this.props

    const containerClassNames = _.compact(['slider-container', className]).join(' ')

    return (
      <div className={containerClassNames}>
        <div className="current-values">
          <div className="value">{value[0]}</div>
          <div className="divider">-</div>
          <div className="value">{value[1]}</div>
        </div>

        <div ref={this.ref}></div>

        <div className="limits">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    )
  }
}

export default Slider
