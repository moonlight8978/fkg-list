import { Unit } from 'fkg-list-types'

export enum SortDirection {
  ascending = 'asc',
  descending = 'desc',
}

export namespace FormData {
  export interface FilterUnits {
    keyword: string
    star: Unit.Star[]
    sortKey: string
    sortDirection: SortDirection
    favorite: Unit.Favorite[]
    attribute: Unit.Attribute[]
    family: Unit.Family[]
    enhancement: Unit.Enhancement[]
    upgradability: Unit.Upgradability[]
  }
}

export interface ApiFlowerKnightGirl extends Unit.Simple, Unit.SimpleDetails, Unit.ImageUrls {}

export interface FlowerKnightGirl extends ApiFlowerKnightGirl {
  id: string
  totalStats: number
}
