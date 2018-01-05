import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Girls from '../components/girls'
import Home from '../components/home'
import Form from '../components/form'
import About from '../components/about'
import './routes.scss'

function Routes({ location }) {
  return (
    <TransitionGroup>
      <CSSTransition
        classNames="fade"
        timeout={300}
        appear
        key={location.pathname.split('/')[1]}
      >
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/girls" component={Girls} />
          <Route path="/form" component={Form} />
          <Route path="/about" component={About} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default withRouter(Routes)
