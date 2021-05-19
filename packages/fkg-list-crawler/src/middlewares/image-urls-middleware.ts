import cheerio, { Cheerio, Element } from 'cheerio'
import { Unit } from 'fkg-list-types'

import { LibraryCrawler } from '../crawlers/library-crawler'
import { BaseUnit, Middleware } from '../types'
import { cache } from '../utils/cache'

const parseRow = (row: Cheerio<Element>): Unit.ImageUrls & { code: BaseUnit['code'] } => {
  const images: Unit.Image[] = []

  row.find('td:nth-child(2) img').each((index, img) => {
    images.push({ url: img.attribs.src })
  })

  return {
    code: row.find('td:first-child').text(),
    images,
  }
}

export class ImageUrlsMiddleware<T extends BaseUnit> implements Middleware<T, Unit.ImageUrls> {
  async execute(units: T[], allCache: any) {
    const libraryCrawler = new LibraryCrawler()
    const crawlData = await libraryCrawler.execute(cache.read(libraryCrawler.cacheKey))

    const imageUrlsByUnitId = new Map<string, Unit.ImageUrls>()

    crawlData.forEach((crawlDatum, index) => {
      const $ = cheerio.load(crawlDatum.data)
      const rows = $('#sortabletable1 tbody tr')
      rows.each((_, row) => {
        const { code, images } = parseRow($(row))
        const key = this.getUnitKey({ code } as any)
        imageUrlsByUnitId.set(key, { images })
      })
    })

    return units.map((unit) => {
      const additionalAttributes = imageUrlsByUnitId.get(this.getUnitKey(unit))

      if (!additionalAttributes) {
        return {
          ...unit,
          images: [],
        }
      }

      return {
        ...unit,
        ...additionalAttributes,
      }
    })
  }

  private getUnitKey(unit: T) {
    return unit.code
  }
}
