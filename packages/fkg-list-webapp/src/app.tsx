import { BrowserRouter as Router, Switch, Route, useLocation, matchPath } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { useCallback } from 'react'

import AboutRoute from './routes/about'
import UnitsRoute from './routes/units'
import { loadTranslations, useLanguage } from './locale'
import { RemoteData, useRemoteData } from './components/remote-data'
import { env } from './config/env'
import { routePaths } from './config/route-defs'
import { UnitDetailsRoute } from './routes/unit-details'

const Routes = () => {
  const location = useLocation()

  const isUnitDetailsRoute = matchPath(location.pathname, { path: routePaths.unitDetails })

  return (
    <>
      <Switch>
        <Route path={routePaths.about} exact>
          <AboutRoute />
        </Route>
        <Route path={routePaths.units}>
          <UnitsRoute />
        </Route>
      </Switch>

      {isUnitDetailsRoute && (
        <Route path={routePaths.unitDetails}>
          <UnitDetailsRoute />
        </Route>
      )}
    </>
  )
}

export default function App() {
  const [language] = useLanguage()

  const request = useCallback(() => loadTranslations(language), [language])
  const [isFetching, messages] = useRemoteData<any>(request)

  const render = () => (
    <IntlProvider locale={language} messages={messages}>
      <Router basename={env.basePath}>
        <Routes />
      </Router>
    </IntlProvider>
  )

  return <RemoteData render={render} fetching={isFetching} />
}
