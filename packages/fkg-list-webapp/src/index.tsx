import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './index.css'
import App from './app'
import { LanguageContext } from './locale'
import { logger, LogLevel } from './utils/logger'
// import reportWebVitals from './reportWebVitals'

if (process.env.NODE_ENV === 'development') {
  logger.level = LogLevel.debug
} else {
  logger.level = LogLevel.info
}

library.add(fas)

ReactDOM.render(
  <React.StrictMode>
    <LanguageContext.PersistedProvider>
      <App />
    </LanguageContext.PersistedProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
