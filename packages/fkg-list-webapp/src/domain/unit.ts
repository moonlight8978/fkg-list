import { Unit } from 'fkg-list-types'

import { FlowerKnightGirl } from '../types'

export const id = (unit: Pick<FlowerKnightGirl, 'star' | 'code'>) => {
  return `${unit.code}-${unit.star}`
}

export const totalStats = (unit: Pick<FlowerKnightGirl, 'hp' | 'attack' | 'defense'>) => {
  return unit.hp + unit.attack + unit.defense
}

export const attributeColor = (unit: Pick<FlowerKnightGirl, 'attribute'>) => {
  switch (unit.attribute) {
    case Unit.Attribute.blue:
      return 'blue'

    case Unit.Attribute.red:
      return 'red'

    case Unit.Attribute.violet:
      return 'purple'

    default:
      return 'orange'
  }
}
