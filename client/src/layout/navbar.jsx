import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { appName } from './../const'

import './navbar.css'


function Navbar() {
  return (
    <div className="navbar-outer">
      <nav className="navbar navbar-expand">
        <div className="container">
          <Link className="navbar-brand d-none d-sm-block" to="/">
            <img src="assets/octopus.png" alt={appName} />
            <span>{appName}</span>
          </Link>

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/my_list">My List</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/extra">Extra</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
