import { Unit } from 'fkg-list-types'

import { FlowerKnightGirl, FormData, SortDirection } from '../types'

import { client } from './client'

class Api {
  private cache: FlowerKnightGirl[] | null = null

  async fetchAll(filter: FormData.FilterUnits) {
    let units = await this.fetchUnits()

    if (filter.star.length > 0) {
      units = units.filter((unit) => filter.star.includes(unit.star))
    }

    if (filter.attribute.length > 0) {
      units = units.filter((unit) => filter.attribute.includes(unit.attribute))
    }

    if (filter.favorite.length > 0) {
      units = units.filter((unit) => filter.favorite.includes(unit.favorite))
    }

    if (filter.keyword) {
      units = units.filter((unit) => unit.name.includes(filter.keyword) || unit.code.includes(filter.keyword))
    }

    units.sort((firstUnit, secondUnit) => {
      if (filter.sortDirection === SortDirection.ascending) {
        // @ts-expect-error
        return firstUnit[filter.sortKey] - secondUnit[filter.sortKey]
      }

      // @ts-expect-error
      return secondUnit[filter.sortKey] - firstUnit[filter.sortKey]
    })

    return units
  }

  private async fetchUnits() {
    if (!this.cache) {
      const units = await client.request<Unit.Simple[]>({
        method: 'get',
        url: '/units-simple.json',
      })

      this.cache = units.map((unit) => ({
        ...unit,
        id: `${unit.code}-${unit.star}`,
        totalStats: unit.hp + unit.attack + unit.defense,
      }))
    }

    return this.cache.slice()
  }
}

export const UnitApi = new Api()
