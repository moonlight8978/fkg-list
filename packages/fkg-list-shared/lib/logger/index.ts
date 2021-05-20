/* eslint-disable prefer-rest-params */

export enum LogLevel {
  error = 90,
  info = 60,
  debug = 20,
}

type LogMethod = 'info' | 'debug' | 'error'

export interface LogDriver extends Record<LogMethod, (...args: any[]) => any> {
  level: LogLevel
}

const logHandle = {
  get(target: LogDriver, prop: 'error' | 'info' | 'debug') {
    if (LogLevel[prop] < target.level) {
      return () => {}
    }

    // @ts-expect-error
    return Reflect.get(...arguments)
  },
}

export const createLogger = (driver: LogDriver): LogDriver => new Proxy(driver, logHandle)
