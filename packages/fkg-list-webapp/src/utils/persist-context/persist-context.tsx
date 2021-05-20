import { Context as ReactContext, createContext, FC, ProviderProps, useCallback, useState } from 'react'

import { logger } from '../logger'

interface PersistConfig {
  key: string
  version?: number
}

type PersistedContextValue<T> = [T, (state: T) => void]

interface PersistContext<T> extends ReactContext<PersistedContextValue<T>> {
  PersistedProvider: FC<Omit<ProviderProps<T>, 'value'>>
}

export function createPersistContext<T>(initialValue: T, persistConfig: PersistConfig): PersistContext<T> {
  const { key, version = 0 } = persistConfig
  const persistKey = `${key}-v${version}`

  const getPersistState = (): T | null => {
    const rawPersistedState = localStorage.getItem(persistKey) || 'null'
    try {
      return JSON.parse(rawPersistedState) as T
    } catch (e) {
      logger.debug('Failed to rehydrate state: ', rawPersistedState, ', with key: ', persistKey)
      return null
    }
  }

  const persistState = (state: T) => {
    localStorage.setItem(persistKey, JSON.stringify(state))
  }

  const Context = createContext<PersistedContextValue<T>>([initialValue, (state) => {}])

  const PersistedContextProvider = (props: Omit<ProviderProps<T>, 'value'>): JSX.Element => {
    const [state, setState] = useState<T>(getPersistState() || initialValue)

    const persistThenSetNewState = useCallback(
      (newState: T) => {
        persistState(newState)
        setState(newState)
      },
      [setState]
    )

    return <Context.Provider {...props} value={[state, persistThenSetNewState]} />
  }

  // @ts-expect-error
  Context.PersistedProvider = PersistedContextProvider

  return Context as PersistContext<T>
}
