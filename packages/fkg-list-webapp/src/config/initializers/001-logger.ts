import { LogLevel } from 'fkg-list-shared'

import { logger } from '../../utils/logger'
import { env } from '../env'

logger.level = env.isDevelopment ? LogLevel.debug : LogLevel.info
