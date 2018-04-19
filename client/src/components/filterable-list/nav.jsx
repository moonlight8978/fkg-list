import React from 'react'
import classNames from 'classnames'

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
    const { keyword, active, onOpen, onClose, onValueChange, children } = this.props

    return (
      <nav className={classNames("filter-nav-bottom", { active: active })}>
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
      </nav>
    )
  }
}

export default Nav
