import fs from 'fs'
import path from 'path'

import axios from 'axios'

import { Crawler, LibraryCrawlerOutput } from '../types'
import { hashing } from '../utils/hashing'
import { cache as cacheUtils } from '../utils/cache'

type Cache = { hash: string }

export class LibraryCrawler implements Crawler<LibraryCrawlerOutput, Cache> {
  public cacheKey = 'LibraryCrawler'

  private hash = new Date().getTime().toString()

  async execute(cache: Cache | null): Promise<LibraryCrawlerOutput[]> {
    const hash = cache?.hash ?? this.hash
    cacheUtils.write(this.cacheKey, { hash })

    return Promise.all(
      [
        'https://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85',
        'https://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85',
        'https://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85%E2%98%85',
        'https://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85',
        'https://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85',
      ].map((url, index) => {
        return this.getHtml(url, hash).then((html) => ({
          data: html,
          metadata: {
            url,
            star: 6 - index,
          },
        }))
      })
    )
  }

  private async getHtml(url: string, hash: string) {
    const filePath = path.join(__dirname, '..', '..', 'tmp', `${hashing.md5(url)}-${hash}.html`)

    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath).toString()
    }

    const response = await axios.get(url)
    fs.writeFileSync(filePath, response.data)
    return response.data
  }
}
