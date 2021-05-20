import { useEffect, useState } from 'react'

import { logger } from '../../utils/logger'

type Request<T> = () => Promise<T>

type State<T> = {
  isFetching: boolean
  data: T
  error: Error | null
}

export function useRemoteData<T, DefaultValue = null>(
  request: Request<T>,
  // @ts-expect-error
  defaultValue: DefaultValue = null
): [boolean, T | DefaultValue, Error | null] {
  const [state, setState] = useState<State<T | DefaultValue>>({
    isFetching: true,
    error: null,
    data: defaultValue,
  })

  useEffect(() => {
    setState((currentState) => ({ ...currentState, isFetching: true }))
    request()
      .then((response) => {
        logger.debug('response: ', response)
        setState((currentState) => ({ ...currentState, isFetching: false, data: response }))
      })
      .catch((error) => {
        setState((currentState) => ({ ...currentState, isFetching: false, error }))
      })
  }, [setState, request])

  useEffect(() => {})

  return [state.isFetching, state.data, state.error]
}
