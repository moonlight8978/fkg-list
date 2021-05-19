/* eslint-disable prefer-rest-params */
import { noop } from 'lodash'

export enum LogLevel {
  error = 90,
  info = 60,
  debug = 20,
}

type LogMethod = 'info' | 'debug' | 'error'

interface LogDriver extends Record<LogMethod, (...args: any[]) => any> {
  level: LogLevel
}

const consoleDriver: LogDriver = {
  level: LogLevel.debug,
  error: console.error,
  debug: console.log,
  info: console.log,
}

const logHandle = {
  get(target: LogDriver, prop: 'error' | 'info' | 'debug') {
    if (LogLevel[prop] < target.level) {
      return noop
    }

    // @ts-expect-error
    return Reflect.get(...arguments)
  },
}

export const createLogger = (driver: LogDriver): LogDriver => new Proxy(driver, logHandle)

export const logger = createLogger(consoleDriver)
