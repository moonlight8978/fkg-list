import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './fade.scss'

function Fade({ children, ...props }) {
  return (
    <CSSTransition
      {...props}
      timeout={{enter: 300, exit: 0}}
      appear
      classNames="fade"
    >
      {children}
    </CSSTransition>
  )
}

export default Fade
