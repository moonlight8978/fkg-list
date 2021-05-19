import { Crawler, LibraryCrawlerOutput } from '../types'
import { cache as cacheUtils } from '../utils/cache'
import { downloader } from '../utils/download'

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
        return downloader.execute(url, hash).then((html) => ({
          data: html,
          metadata: {
            url,
            star: 6 - index,
          },
        }))
      })
    )
  }
}
