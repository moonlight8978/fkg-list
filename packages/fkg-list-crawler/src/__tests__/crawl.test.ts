import fs from 'fs'
import path from 'path'

import { LogLevel } from 'fkg-list-shared'

import { crawl, simplePreset } from '..'
import { logger } from '../utils/logger'

logger.level = LogLevel.error

const outputPath = path.join(__dirname, '..', '..', 'tmp', 'units-simple.json')

beforeEach(() => {
  if (fs.existsSync(outputPath)) {
    fs.rmSync(outputPath)
  }
})

it('crawl data successfully', async () => {
  await crawl(simplePreset)
  expect(fs.existsSync(outputPath)).toEqual(true)
})
