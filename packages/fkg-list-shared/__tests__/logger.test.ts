import { createLogger, LogLevel } from '../lib/logger'

const driver = {
  level: LogLevel.debug,
  error: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
}

const logger = createLogger(driver)

beforeEach(() => {
  driver.error.mockClear()
  driver.info.mockClear()
  driver.debug.mockClear()
})

describe('debug', () => {
  test('not called when loglevel info', () => {
    logger.level = LogLevel.info
    logger.debug('abc')
    expect(driver.debug).not.toBeCalled()
  })

  test('not called when loglevel error', () => {
    logger.level = LogLevel.error
    logger.debug('abc')
    expect(driver.debug).not.toBeCalled()
  })

  test('called when loglevel debug', () => {
    logger.level = LogLevel.debug
    logger.debug('abc')
    expect(driver.debug).toBeCalledTimes(1)
  })
})

describe('info', () => {
  test('not called when loglevel error', () => {
    logger.level = LogLevel.error
    logger.info('abc')
    expect(driver.info).not.toBeCalled()
  })

  test('called when loglevel info', () => {
    logger.level = LogLevel.info
    logger.info('abc')
    expect(driver.info).toBeCalledTimes(1)
  })

  test('called when loglevel debug', () => {
    logger.level = LogLevel.debug
    logger.info('abc')
    expect(driver.info).toBeCalledTimes(1)
  })
})

describe('error', () => {
  test('called when loglevel error', () => {
    logger.level = LogLevel.error
    logger.error('abc')
    expect(driver.error).toBeCalledTimes(1)
  })

  test('called when loglevel info', () => {
    logger.level = LogLevel.info
    logger.error('abc')
    expect(driver.error).toBeCalledTimes(1)
  })

  test('called when loglevel debug', () => {
    logger.level = LogLevel.debug
    logger.error('abc')
    expect(driver.error).toBeCalledTimes(1)
  })
})
