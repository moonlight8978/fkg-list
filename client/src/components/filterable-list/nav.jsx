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
    const { keyword, onOpen, onClose, onValueChange, children } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="nav-bottom_keyword-group">
          <span>FKGList</span>
          <input
            className="form-control"
            placeholder="Enter keyword..."
            onFocus={onOpen}
            value={keyword}
            onChange={(event) => onValueChange('keyword', event.target.value)}
          />
          <i className="fas fa-search"></i>
        </div>

        <div className="nav-bottom_actions-and-filter">
          <div className="nav-bottom_actions">
            <button className="btn btn-primary btn-edge" type="submit">
              Search
            </button>

            <button className="btn btn-primary btn-edge" type="button" onClick={onClose}>
              Cancel
            </button>
          </div>

          <div className="nav-bottom_filter">
            {children}
          </div>
        </div>
      </form>
    )
  }
}

export default Nav
