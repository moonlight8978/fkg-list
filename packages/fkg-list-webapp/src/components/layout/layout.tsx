import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { routePaths } from '../../config/route-defs'
import { Language, useLanguage } from '../../locale'

interface Props {
  children: ReactNode
}

const Container = styled.div`
  min-height: 100vh;
`

export default function Layout({ children }: Props) {
  const { pathname } = useLocation()
  const [currentLanguage, onLanguageChange] = useLanguage()

  return (
    <Container className="animate__animated animate__fadeIn">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link to={routePaths.units} className="navbar-brand">
            <FormattedMessage id="layout.brand" />
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  to={routePaths.units}
                  className={classnames('nav-link', { active: pathname === routePaths.units })}
                >
                  <FormattedMessage id="layout.units" />
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={routePaths.about}
                  className={classnames('nav-link', { active: pathname === routePaths.about })}
                >
                  <FormattedMessage id="layout.about" />
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FormattedMessage id="layout.language" />
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {[Language.english, Language.japanese].map((language) => (
                    <li key={language}>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => onLanguageChange(language)}
                        disabled={language === currentLanguage}
                      >
                        <FormattedMessage id={`language.${language}`} />
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">{children}</div>
    </Container>
  )
}
