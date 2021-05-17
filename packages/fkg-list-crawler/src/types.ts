import { Unit } from 'fkg-list-types'

export interface CrawlDatum<Data, Metadata = {}> {
  data: Data
  metadata: Metadata
}

export interface Crawler<Output extends CrawlDatum<any>, Cache = any> {
  cacheKey: string

  execute: (cache: Cache) => Promise<Output[]>
}

export interface Parser<CrawlerOutput extends CrawlDatum<any>, Output> {
  execute: (data: CrawlerOutput[]) => Output[]
}

export interface Middleware<ParserOutput, AdditionalAttributes extends Record<string, any>> {
  execute: (data: ParserOutput[], cache: any) => Promise<(ParserOutput & AdditionalAttributes)[]>
}

export interface Output<Data extends any[]> {
  execute: (data: Data) => Promise<void>
}

export type StatusCrawlerOutput = CrawlDatum<string>

export type SimpleParserOutput = Unit.Simple

export type SimpleDetailsMiddlewareAttributes = Unit.SimpleDetails

export type LibraryCrawlerOutput = CrawlDatum<string, { url: string; star: number }>

export type BaseUnit = Pick<Unit.Simple, 'code' | 'star'>
