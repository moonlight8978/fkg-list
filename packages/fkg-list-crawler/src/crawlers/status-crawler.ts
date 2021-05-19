import { Crawler, StatusCrawlerOutput } from '../types'
import { cache as cacheUtils } from '../utils/cache'
import { downloader } from '../utils/download'

type Cache = undefined | null | { hash: string }

export class StatusCrawler implements Crawler<StatusCrawlerOutput, Cache> {
  public cacheKey = 'StatusCrawler'

  protected hash: string = new Date().getTime().toString()

  async execute(cache: Cache) {
    const hash = cache?.hash ?? this.hash
    cacheUtils.write(this.cacheKey, { hash })
    const html = await downloader.execute(
      'https://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E8%8A%B1%E9%A8%8E%E5%A3%AB%20%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E4%B8%80%E8%A6%A7',
      hash
    )

    return [{ data: html, metadata: {} }]
  }
}
