import React from 'react'

import './nav.css'

class Nav extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const { onClose, onSubmit } = this.props
    onClose()
    onSubmit(event)
  }

  render() {
    const { onOpen, onClose } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="nav-bottom_keyword-group">
          <input
            className="form-control"
            placeholder="Search..."
            onFocus={onOpen}
          />
        </div>

        <div>
          <button className="btn btn-primary" type="submit">
            Search
          </button>

          <button className="btn btn-primary" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    )
  }
}

export default Nav
