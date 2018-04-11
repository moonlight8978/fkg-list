import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

class NavBottom extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(event) {
    this.setState({ active: false })
  }

  handleOpen(event) {
    this.setState({ active: true })
  }

  render() {
    const { active } = this.state

    return (
      <nav className={classNames("nav-bottom", { active: active })}>
        {this.props.render({ onClose: this.handleClose, onOpen: this.handleOpen })}
      </nav>
    )
  }
}

export default NavBottom
