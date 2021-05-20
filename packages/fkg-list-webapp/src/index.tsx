import React from 'react'
import ReactDOM from 'react-dom'

import './config/initializers'
import './index.css'
import 'animate.css/animate.min.css'
import App from './app'
import { LanguageContext } from './locale'
import { ErrorBoundary } from './components/error-boundary'
import { nullNotifier, sentryNotifier } from './utils/error-notifier'
import { env } from './config/env'
// import reportWebVitals from './reportWebVitals'

const errorNotifier = env.isProduction ? sentryNotifier : nullNotifier

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary notifier={errorNotifier}>
      <LanguageContext.PersistedProvider>
        <App />
      </LanguageContext.PersistedProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
