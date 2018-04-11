import React from 'react'

import Navbar from './navbar'

function Layout({ children }) {
  return (
    <div className="app-container">
      <Navbar />

      {children}
    </div>
  )
}

export default Layout
