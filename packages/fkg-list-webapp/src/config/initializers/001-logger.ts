import { LogLevel } from 'fkg-list-shared'

import { logger } from '../../utils/logger'

if (process.env.NODE_ENV === 'development') {
  logger.level = LogLevel.debug
} else {
  logger.level = LogLevel.info
}
