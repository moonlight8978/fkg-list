import { useEffect, useState } from 'react'

type Request<T> = () => Promise<T>

type State<T> = {
  isFetching: boolean
  data: null | T
  error: Error | null
}

export function useRemoteData<T>(request: Request<T>): [boolean, T | null, Error | null] {
  const [state, setState] = useState<State<T>>({
    isFetching: true,
    error: null,
    data: null,
  })

  useEffect(() => {
    request()
      .then((response) => {
        setState((currentState) => ({
          ...currentState,
          isFetching: false,
          data: response,
        }))
      })
      .catch((error) => {
        setState((currentState) => ({
          ...currentState,
          isFetching: false,
          error,
        }))
      })
  }, [setState, request])

  useEffect(() => {})

  return [state.isFetching, state.data, state.error]
}
