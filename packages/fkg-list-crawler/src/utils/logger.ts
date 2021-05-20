import { LogDriver, LogLevel, createLogger } from 'fkg-list-shared'

const consoleDriver: LogDriver = {
  level: LogLevel.debug,
  error: console.log,
  debug: console.log,
  info: console.log,
}

export const logger = createLogger(consoleDriver)
