import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Gallery from './components/gallery'
import MyList from './components/my-list'
import Home from './components/home'
import Extra from './components/extra'

function Routes() {
  return (
    <div className="container page-content">
      <Switch>
        <Route path="/gallery" component={Gallery} />
        <Route path="/my_list" component={MyList} />
        <Route path="/extra" component={Extra} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default Routes
