import * as Sentry from '@sentry/browser'

export const sentryNotifier = {
  capture: (error: Error, additionalInfo: any) => {
    Sentry.captureException(error, {
      extra: additionalInfo,
    })
  },
}
