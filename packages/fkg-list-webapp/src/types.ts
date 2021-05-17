import { ILazyLoadInstance } from 'vanilla-lazyload'
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
  }
}

export interface FlowerKnightGirl extends Unit.Simple {
  id: string
  totalStats: number
}

declare global {
  export interface Document {
    lazyLoadInstance: ILazyLoadInstance
  }
}
