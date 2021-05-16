import fs from 'fs'
import path from 'path'

import axios from 'axios'

import { Crawler, StatusCrawlerOutput } from '../types'
import { cache as cacheUtils } from '../utils/cache'

type Cache = undefined | null | { hash: string }

const getPageFilePath = (hash: string) => path.join(process.cwd(), 'tmp', `unit-status-list-${hash}.html`)

export class StatusCrawler implements Crawler<StatusCrawlerOutput, Cache> {
  public cacheKey = 'StatusCrawler'

  protected hash: string = new Date().getTime().toString()

  async execute(cache: Cache) {
    const hash = cache?.hash ?? this.hash
    cacheUtils.write(this.cacheKey, { hash })
    const html = await this.getHtml(hash)

    return [{ data: html, metadata: {} }]
  }

  private async getHtml(hash: string) {
    const pageFilePath = getPageFilePath(hash)

    if (fs.existsSync(pageFilePath)) {
      return fs.readFileSync(pageFilePath).toString()
    }

    const response = await axios.get(
      'https://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E8%8A%B1%E9%A8%8E%E5%A3%AB%20%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E4%B8%80%E8%A6%A7'
    )
    fs.writeFileSync(pageFilePath, response.data)
    return response.data
  }
}
