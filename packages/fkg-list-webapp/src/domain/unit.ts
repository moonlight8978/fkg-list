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

export const rarityValues = [2, 3, 4, 5, 6]

export const attributeValues = [Unit.Attribute.blue, Unit.Attribute.red, Unit.Attribute.violet, Unit.Attribute.yellow]

export const favoriteValues = [Unit.Favorite.book, Unit.Favorite.cake, Unit.Favorite.doll, Unit.Favorite.jewel]

export const familyValues = [
  Unit.Family.bananaOcean,
  Unit.Family.bergamotValley,
  Unit.Family.blossomHill,
  Unit.Family.lilywood,
  Unit.Family.lotusLake,
  Unit.Family.winterRose,
]

export const enhancementValues = [
  Unit.Enhancement.twoSteps,
  Unit.Enhancement.threeSteps,
  Unit.Enhancement.threeStepsWithArt,
]

export const upgradabilityValues = [Unit.Upgradability.none, Unit.Upgradability.promoteToSixStars]
