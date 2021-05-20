import path from 'path'
import fs from 'fs'

import axios from 'axios'

import { checksum } from './hashing'
import { logger } from './logger'

const fileCacheStrategy = async (url: string, hash: string, download: () => Promise<string>) => {
  const cachePath = path.join(__dirname, '..', '..', 'tmp', `${[checksum(url), hash].join('-')}.html`)

  if (fs.existsSync(cachePath)) {
    logger.debug(`--- fileCacheStrategy: read from cache url: ${url}, hash: ${hash}`)
    return fs.readFileSync(cachePath).toString()
  }

  logger.debug(`--- fileCacheStrategy: no cache found, start downloading url: ${url}, hash: ${hash}`)
  const data = await download()
  fs.writeFileSync(cachePath, data)
  return data
}

export class Downloader {
  constructor(private client = axios, private cacheStrategy = fileCacheStrategy) {}

  execute(url: string, hash: string = ''): Promise<string> {
    return this.cacheStrategy(url, hash, () => this.client.get(url).then((response) => response.data))
  }
}

export const downloader = new Downloader()
