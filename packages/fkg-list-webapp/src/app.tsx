import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { useCallback } from 'react'

import AboutRoute from './routes/about'
import UnitsRoute from './routes/units'
import { loadTranslations, useLanguage } from './locale'
import { RemoteData, useRemoteData } from './components/remote-data'

export default function App() {
  const [language] = useLanguage()

  const request = useCallback(() => loadTranslations(language), [language])
  const [isFetching, messages] = useRemoteData<any>(request)

  const render = () => (
    <IntlProvider locale={language} messages={messages}>
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
    </IntlProvider>
  )

  return <RemoteData render={render} fetching={isFetching} />
}
