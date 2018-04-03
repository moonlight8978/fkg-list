import React from 'react'
import $ from 'jquery'

class Header extends React.PureComponent {
  constructor(props) {
    super(props)

    this.keywordRef = React.createRef()
  }

  componentDidMount() {
    this.$keyword = $(this.keywordRef.current)
    this.$keyword.autocomplete({
      change: (event, ui) => {
        this.props.onValueChange('keyword', event)
      },
      close: (event, ui) => {
        this.props.onValueChange('keyword', event)
      },
      select: (event, ui) => {
        this.props.onValueChange('keyword', event)
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { itemNames } = this.props
    const needUpdate =
      (itemNames && prevProps.itemNames === null) ||
      (itemNames && prevProps.itemNames && itemNames.length !== prevProps.itemNames.length)
    if (needUpdate) {
      console.log("Set autocomplete source")
      this.$keyword.autocomplete("option", "source", this.props.itemNames)
    }
  }

  componentWillUnmount() {
    this.$keyword.autocomplete('destroy')
  }

  render() {
    const { keyword, onSubmit, onValueChange } = this.props

    return (
      <div className="filterable-list_header">
        <form onSubmit={onSubmit}>
          <input
            className="form-control"
            placeholder="Enter keyword..."
            ref={this.keywordRef}
            value={keyword}
            onChange={(event) => onValueChange('keyword', event)}
            autoFocus
          />

          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    )
  }
}

export default Header
