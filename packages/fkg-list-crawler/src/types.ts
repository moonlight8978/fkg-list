import { Unit } from 'fkg-list-types'

export interface CrawlDatum<Data, Metadata = {}> {
  data: Data
  metadata: Metadata
}

export interface Crawler<Output extends CrawlDatum<any>> {
  execute: () => Promise<Output[]>
}

export interface Parser<CrawlerOutput extends CrawlDatum<any>, Output> {
  execute: (data: CrawlerOutput[]) => Output[]
}

export interface Middleware<ParserOutput, Output> {
  execute: (data: ParserOutput[]) => Promise<Output[]>
}

export type StatusCrawlerOutput = CrawlDatum<string>

export type SimpleParserOutput = Unit.Simple
