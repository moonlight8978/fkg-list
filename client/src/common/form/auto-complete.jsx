import React from 'react'
import _ from 'lodash'

import './auto-complete.css'

const $ = window.$

export default class AutoComplete extends React.PureComponent {
  ref = React.createRef()

  componentDidMount() {
    const { onChange } = this.props

    this.$input = $(this.ref.current)
    this.$input.autocomplete({
      position: { my: "left top", at: "left bottom", collision: "none" },
      source: this.props.source,
      // change(event, ui) {
      //   // console.log("Change", event.target.value, ui.item && ui.item.value)
      //   // console.log(`-> ${event.target.value}`)
      //   onChange(event.target.value)
      // },
      select(event, ui) {
        // console.log("Select", event.target.value, ui.item && ui.item.value)
        // console.log(`-> ${ui.item.value}`)
        onChange(ui.item.value)
      },
      // focus(event, ui){
      //   // console.log("Focus", event.target.value, ui.item && ui.item.value)
      //   // console.log(`-> ${ui.item.value}`)
      //   onChange(ui.item.value)
      // },
      // close(event, ui) {
      //   // console.log("Close", event.target.value, ui.item && ui.item.value)
      //   // console.log(`-> ${event.target.value}`)
      //   onChange(event.target.value)
      // }
    })
  }

  componentWillUnmount() {
    this.$input.autocomplete('destroy')
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.$input.autocomplete("option", "source", this.props.source)
  // }

  render() {
    const { onChange, className, ...rest } = this.props

    const inputClassNames = _.compact(['form-control', 'autocomplete-control', className]).join(' ')

    return (
      <input
        ref={this.ref}
        className={inputClassNames}
        onChange={(event) => {
          onChange(event.target.value)
        }}
        {...rest}
      />
    )
  }
}
