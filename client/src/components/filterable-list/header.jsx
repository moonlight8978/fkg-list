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
        console.log(event.target.value);
        this.props.onValueChange('keyword', event.target.value)
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { itemNames } = this.props
    if (itemNames && prevProps.itemNames === null) {
      console.log("Set autocomplete source");
      this.$keyword.autocomplete("option", "source", this.props.itemNames)
    }
  }

  componentWillUnmount() {
    this.$keyword.autocomplete('destroy')
  }

  render() {
    const { onSubmit } = this.props

    return (
      <div className="filterable-list_header">
        <form onSubmit={onSubmit}>
          <input
            className="form-control"
            placeholder="Enter keyword..."
            ref={this.keywordRef}
            autoFocus
          />

          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    )
  }
}

export default Header
