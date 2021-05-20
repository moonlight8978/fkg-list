import { ComponentType } from 'react'

import { Loading } from '../loading'

interface Props {
  fetching: boolean
  render?: () => JSX.Element | null
  Renderer?: ComponentType<any>
  fallback?: JSX.Element | null
  children?: JSX.Element | null
}

export function RemoteData({
  fetching,
  render,
  Renderer,
  fallback = <Loading size="3x" />,
  children = null,
}: Props): JSX.Element | null {
  if (fetching) {
    return fallback
  }

  if (Renderer) {
    return <Renderer />
  }

  if (render) {
    return render()
  }

  return children
}
