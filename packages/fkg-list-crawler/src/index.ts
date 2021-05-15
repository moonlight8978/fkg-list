import { StatusCrawler } from './crawlers/status-crawler'
import { jsonOutput } from './output/json-output'
import { SimpleParser } from './parsers/simple-parser'
import { cache } from './utils/cache'

const run = async () => {
  cache.createCacheFileIfNotExists()

  const crawl = await new StatusCrawler(cache.readCache(StatusCrawler.cacheKey)).execute()
  const units = new SimpleParser().execute(crawl)
  jsonOutput(units)
}

run()
