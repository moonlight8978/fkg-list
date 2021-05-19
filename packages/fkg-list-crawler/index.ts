import { LogLevel } from 'fkg-list-shared'

import { crawl, simplePreset } from './src'
import { logger } from './src/utils/logger'

logger.level = LogLevel.debug

crawl(simplePreset)
  .then(() => logger.debug('ok'))
  .catch((error) => {
    logger.debug(error)
    throw error
  })
