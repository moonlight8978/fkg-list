import cheerio, { Cheerio, Element } from 'cheerio'
import { Unit } from 'fkg-list-types'

import { Parser, SimpleParserOutput, StatusCrawlerOutput } from '../types'

const parseAttribute = (colValue: string): Unit.Attribute => {
  switch (colValue) {
    case '打':
      return Unit.Attribute.blue

    case '斬':
      return Unit.Attribute.red

    case '突':
      return Unit.Attribute.yellow

    case '魔':
      return Unit.Attribute.violet

    default:
      throw new Error(`unsupport attribute ${colValue}`)
  }
}
const parseStar = (colValue: string): Unit.Star => {
  const starMatch = colValue.match(/\d+/)
  if (!starMatch) {
    throw new Error(`${colValue} is not valid star col value`)
  }
  const star = parseInt(starMatch[0], 10)
  if (star < 2 || star > 6) {
    throw new Error(`${star} is not valid`)
  }
  return star as Unit.Star
}

const parseStat = (colValue: string): number => {
  return parseInt(colValue.replace(',', ''), 10)
}

const parseFavorite = (colValue: string): Unit.Favorite => {
  switch (colValue) {
    case 'ケーキ':
      return Unit.Favorite.cake

    case '本':
      return Unit.Favorite.book

    case 'ぬいぐるみ':
      return Unit.Favorite.doll

    case '宝石':
      return Unit.Favorite.jewel

    default:
      throw new Error(`unsupport favorite ${colValue}`)
  }
}

const parseRow = (row: Cheerio<Element>): SimpleParserOutput => {
  return {
    code: row.find('td:first-child').text(),
    attribute: parseAttribute(row.find('td:nth-child(2)').text()),
    name: row.find('td:nth-child(4)').text(),
    star: parseStar(row.find('td:nth-child(7)').text()),
    hp: parseStat(row.find('td:nth-child(8)').text()),
    attack: parseStat(row.find('td:nth-child(9)').text()),
    defense: parseStat(row.find('td:nth-child(10)').text()),
    favorite: parseFavorite(row.find('td:nth-child(14)').text()),
    images: [{ url: '' }, { url: '' }, { url: '' }],
  }
}

export class SimpleParser implements Parser<StatusCrawlerOutput, SimpleParserOutput> {
  execute(crawls: StatusCrawlerOutput[]) {
    return crawls
      .map((crawl) => {
        const $ = cheerio.load(crawl.data)
        const rows = $('#sortabletable1 tbody tr')

        const results: SimpleParserOutput[] = []

        rows.each((index, row) => {
          results.push(parseRow($(row)))
        })

        return results
      })
      .flat(1)
  }
}
