import { StatusCrawler } from './crawlers/status-crawler'
import { JsonOutput } from './output/json-output'
import { SimpleParser } from './parsers/simple-parser'
import { SimpleDetailsMiddleware } from './middlewares/simple-details-middleware'
import { cache } from './utils/cache'
import {
  CrawlDatum,
  Crawler,
  Middleware,
  Output,
  Parser,
  SimpleDetailsMiddlewareAttributes,
  SimpleParserOutput,
} from './types'

interface CrawlPreset<CrawlData, ParserOutput, MiddlewaresAppliedOutput extends ParserOutput> {
  crawler: Crawler<CrawlDatum<CrawlData>>
  parser: Parser<CrawlDatum<CrawlData>, ParserOutput>
  middlewares: Middleware<any, any>[]
  output: Output<MiddlewaresAppliedOutput[]>
}

export const crawl = async <CrawlData, ParserOutput, MiddlewaresAppliedOutput extends ParserOutput>({
  crawler,
  parser,
  middlewares,
  output,
}: CrawlPreset<CrawlData, ParserOutput, MiddlewaresAppliedOutput>) => {
  cache.createCacheFileIfNotExists()

  const rawData = await crawler.execute(cache.read(crawler.cacheKey))
  const units = parser.execute(rawData)
  const unitsToExport = (await middlewares.reduce(
    (resolveEnhancedUnits, middleware) =>
      resolveEnhancedUnits.then((enhancedUnits) => {
        const allCaches = cache.readAll()
        return middleware.execute(enhancedUnits, allCaches)
      }),
    Promise.resolve(units)
  )) as MiddlewaresAppliedOutput[]
  await output.execute(unitsToExport)
}

export const createCrawlPreset = <T, U, V extends U>(preset: CrawlPreset<T, U, V>): CrawlPreset<T, U, V> => preset

export const simplePreset = createCrawlPreset({
  crawler: new StatusCrawler(),
  parser: new SimpleParser(),
  middlewares: [new SimpleDetailsMiddleware<SimpleParserOutput>()],
  output: new JsonOutput<Array<SimpleParserOutput & SimpleDetailsMiddlewareAttributes>>(),
})
