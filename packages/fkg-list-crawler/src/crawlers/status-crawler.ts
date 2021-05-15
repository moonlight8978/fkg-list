import fs from 'fs'
import path from 'path'
import axios from 'axios'

import { Crawler, StatusCrawlerOutput } from '../types'
import { cache as cacheUtils } from '../utils/cache'

type Cache = undefined | null | { hash: string }

const getPageFilePath = (hash: string) => path.join(process.cwd(), 'tmp', `unit-status-list-${hash}.html`)

export class StatusCrawler implements Crawler<StatusCrawlerOutput> {
  public static cacheKey = 'StatusCrawler'

  protected hash: string

  constructor(protected cache: Cache) {
    if (cache) {
      this.hash = cache.hash
    } else {
      this.hash = new Date().getTime().toString()
      cacheUtils.write(StatusCrawler.cacheKey, { hash: this.hash })
    }
  }

  async execute() {
    const html = await this.getHtml()

    return [{ data: html, metadata: {} }]
  }

  private async getHtml() {
    const pageFilePath = getPageFilePath(this.hash)

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
