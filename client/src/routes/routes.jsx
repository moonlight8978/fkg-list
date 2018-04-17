import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Gallery from './gallery'
import MyList from './my-list'
import Home from './home'
import Extra from './extra'
import Test from './test'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/my_list" component={MyList} />
      <Route path="/extra" component={Extra} />
      <Route path="/test" component={Test} />
    </Switch>
  )
}

export default Routes
