import React from 'react';
import { NavLink } from 'react-router-dom';

import { appName } from './../const';
import logo from './octopus.png';

import './navbar.css';


function Navbar() {
  return (
    <div className="navbar-outer">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt={appName} />
            <span>{appName}</span>
          </NavLink>

          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> */}

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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
