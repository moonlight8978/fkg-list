import React from 'react'
import classNames from 'classnames'
import Navbar from './navbar'

function Layout({ hasNavBottom, children }) {

  return (
    <div className={classNames('app-container', { 'has-nav-bottom': hasNavBottom })}>
      <div className="page-outer">
        <Navbar />

        <div className="container page-content">
          {children}
        </div>
      </div>

      <div id="nav-bottom-root"></div>
    </div>
  )
}

export default Layout
