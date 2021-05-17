import cheerio, { Cheerio, Element } from 'cheerio'
import { Unit } from 'fkg-list-types'

import { StatusCrawler } from '../crawlers/status-crawler'
import { BaseUnit, Middleware, SimpleDetailsMiddlewareAttributes } from '../types'
import { cache } from '../utils/cache'

const parseFamily = (colValue: string): Unit.Family => {
  switch (colValue) {
    case 'ウ':
      return Unit.Family.winterRose
    case 'バ':
      return Unit.Family.bananaOcean
    case 'ブ':
      return Unit.Family.blossomHill
    case 'ベ':
      return Unit.Family.bergamotValley
    case 'リ':
      return Unit.Family.lilywood
    case 'ロ':
      return Unit.Family.lotusLake
    default:
      throw new Error(`unsupport family ${colValue}`)
  }
}

const parseEnhancement = (colValue: string): Unit.Enhancement => {
  switch (colValue) {
    case '-':
      return Unit.Enhancement.twoSteps
    case '開花(能力のみ)':
      return Unit.Enhancement.threeSteps
    case '開花':
      return Unit.Enhancement.threeStepsWithArt
    default:
      throw new Error(`unsupport enhancement ${colValue}`)
  }
}

const parseUpgradability = (colValue: string): Unit.Upgradability => {
  switch (colValue) {
    case '-':
      return Unit.Upgradability.none
    case '昇華':
      return Unit.Upgradability.promoteToSixStars
    default:
      throw new Error(`unsupport upgradability ${colValue}`)
  }
}

const parseStat = (colValue: string): number => {
  return parseInt(colValue.replace(',', ''), 10)
}

const parseRow = (row: Cheerio<Element>): SimpleDetailsMiddlewareAttributes => {
  return {
    family: parseFamily(row.find('td:nth-child(3)').text()),
    enhancement: parseEnhancement(row.find('td:nth-child(5)').text()),
    upgradability: parseUpgradability(row.find('td:nth-child(6)').text()),
    speed: parseStat(row.find('td:nth-child(11)').text()),
  }
}

const parseKey = (row: Cheerio<Element>): string => {
  const code = row.find('td:first-child').text()
  const star = row.find('td:nth-child(7)').text()

  return `${code}${star}`
}

export class SimpleDetailsMiddleware<T extends BaseUnit> implements Middleware<T, Unit.SimpleDetails> {
  async execute(units: T[], allCache: any) {
    const statusCrawler = new StatusCrawler()
    const crawls = await statusCrawler.execute(cache.read(statusCrawler.cacheKey))
    const results = new Map<string, SimpleDetailsMiddlewareAttributes>()

    crawls.forEach((crawl) => {
      const $ = cheerio.load(crawl.data)
      const rows = $('#sortabletable1 tbody tr')

      rows.each((index, row) => {
        const $row = $(row)
        results.set(parseKey($row), parseRow($row))
      })
    })

    return units.map((unit): T & Unit.SimpleDetails => {
      const additionalAttributes = results.get(this.getUnitKey(unit))

      if (!additionalAttributes) {
        throw new Error(`--- SimpleDetailsMiddleware: No attributes found for unit ${this.getUnitKey(unit)}`)
      }

      return { ...unit, ...additionalAttributes }
    })
  }

  private getUnitKey(unit: T) {
    return `${unit.code}★${unit.star}`
  }
}
