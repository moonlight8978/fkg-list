import { Component, ReactNode, ErrorInfo } from 'react'

import { logger } from '../../utils/logger'

type ErrorNotifier = {
  capture: (error: Error, additionalInfo: any) => void
}

interface Props {
  children: ReactNode
  notifier: ErrorNotifier
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { notifier } = this.props
    logger.debug('ErrorBoundary', error, errorInfo)
    notifier.capture(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <div className="container">
          <div className="alert alert-danger text-center my-4" role="alert">
            <h4 className="alert-heading">Error occurred!</h4>
            If you meet this message, it means there is something wrong with our service.
            <br />
            We have already got information about the error, and will try to fix it as soon as possible.
            <br />
            Sorry for inconvenience.
          </div>
        </div>
      )
    }

    return children
  }
}
