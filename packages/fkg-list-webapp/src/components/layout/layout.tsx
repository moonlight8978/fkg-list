import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import styled from 'styled-components'

import { routePaths } from '../../config/route-defs'

interface Props {
  children: ReactNode
}

const Container = styled.div`
  min-height: 100vh;
`

export default function Layout({ children }: Props) {
  const { pathname } = useLocation()

  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link to={routePaths.units} className="navbar-brand">
            FKG LIST
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={routePaths.units}
                  className={classnames('nav-link', { active: pathname === routePaths.units })}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={routePaths.about}
                  className={classnames('nav-link', { active: pathname === routePaths.about })}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">{children}</div>
    </Container>
  )
}
