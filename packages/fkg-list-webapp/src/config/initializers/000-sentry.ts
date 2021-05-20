import * as Sentry from '@sentry/browser'

import { env } from '../env'
// import { Integrations } from '@sentry/tracing'

Sentry.init({
  dsn: 'https://1d8ee85483824358a268760de24ecc1f@o265630.ingest.sentry.io/5774771',
  // integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.2,
  enabled: env.isProduction,
  release: env.commitId,
})
