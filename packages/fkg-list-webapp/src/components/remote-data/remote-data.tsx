import { ComponentType } from 'react'

import { Loading } from '../loading'

interface Props {
  fetching: boolean
  render?: () => JSX.Element | null
  Renderer?: ComponentType<any>
  fallback?: JSX.Element | null
}

export function RemoteData({ fetching, render = () => null, Renderer, fallback = null }: Props): JSX.Element | null {
  if (fetching) {
    return fallback || <Loading size="3x" />
  }

  if (Renderer) {
    return <Renderer />
  }

  return render()
}
