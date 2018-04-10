import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

const navbottom = document.getElementById('nav-bottom-root');

class NavBottom extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    }

    this.el = document.createElement('div');
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    navbottom.appendChild(this.el);
  }

  componentWillUnmount() {
    navbottom.removeChild(this.el);
  }

  handleClose(event) {
    this.setState({ active: false })
  }

  handleOpen(event) {
    this.setState({ active: true })
  }

  render() {
    const { active } = this.state

    return ReactDOM.createPortal(
      <nav className={classNames("nav-bottom", { active: active })}>
        {this.props.render({ onClose: this.handleClose, onOpen: this.handleOpen })}
      </nav>,
      this.el,
    )
  }
}

export default NavBottom
