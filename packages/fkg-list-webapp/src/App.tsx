import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AboutRoute from './routes/about'
import UnitsRoute from './routes/units'

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/about">
          <AboutRoute />
        </Route>
        <Route path="/">
          <UnitsRoute />
        </Route>
      </Switch>
    </Router>
  )
}
