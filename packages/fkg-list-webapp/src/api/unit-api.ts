import * as unitModel from '../domain/unit'
import { ApiFlowerKnightGirl, FlowerKnightGirl, FormData, SortDirection } from '../types'

import { client } from './client'

class Api {
  private cache: FlowerKnightGirl[] | null = null

  async fetchAll(filter: FormData.FilterUnits) {
    let units = await this.fetchUnits()

    const fieldsToFilter: Array<keyof FormData.FilterUnits> = [
      'star',
      'attribute',
      'family',
      'enhancement',
      'upgradability',
    ]

    fieldsToFilter.forEach((field) => {
      if (filter[field].length > 0) {
        // @ts-expect-error
        units = units.filter((unit) => filter[field].includes(unit[field]))
      }
    })

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
      const units = await client.request<ApiFlowerKnightGirl[]>({
        method: 'get',
        url: '/units-simple.json',
        params: {
          timestamp: new Date().getTime().toString(),
        },
      })

      this.cache = units.map((unit) => ({
        ...unit,
        id: unitModel.id(unit),
        totalStats: unitModel.totalStats(unit),
      }))
    }

    return this.cache.slice()
  }
}

export const UnitApi = new Api()
