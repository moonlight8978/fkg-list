import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

class NavBottom extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    }

    this.el = document.createDocumentFragment()

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    this.navBottomRoot = document.getElementById('nav-bottom-root')
    this.navBottomRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    this.navBottomRoot.removeChild(this.el)
  }

  handleClose(event) {
    this.setState({ active: false })
  }

  handleOpen(event) {
    this.setState({ active: true })
  }

  render() {
    const { active } = this.state

    const { render } = this.props

    return (
      ReactDOM.createPortal(
        <nav className={classNames("nav-bottom", { active: active })}>
          {render({ onClose: this.handleClose, onOpen: this.handleOpen })}
        </nav>,
        this.el,
      )
    )
  }
}

export default NavBottom
