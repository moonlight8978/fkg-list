import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import ImgPlaceholder from '../../common/img-placeholder'
import './navbar.scss'

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="app-logo">
            <ImgPlaceholder src="/octopus.png" alt="FKG List Logo" ratio="1_1" />
          </div>
          <div className="app-name d-none d-sm-block">
            FKG List
          </div>
        </Link>

        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <NavLink to="/form" activeClassName="active" className="nav-link">Form</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/girls" activeClassName="active" className="nav-link">Collection</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-list" activeClassName="active" className="nav-link">My List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
