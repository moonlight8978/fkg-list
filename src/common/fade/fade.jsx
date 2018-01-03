import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './fade.scss'

function Fade({ children, ...props }) {
  return (
    <CSSTransition
      {...props}
      timeout={300}
      appear
      classNames="fade"
    >
      {children}
    </CSSTransition>
  )
}

export default Fade
