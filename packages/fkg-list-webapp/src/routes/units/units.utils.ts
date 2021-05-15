import { Unit } from 'fkg-list-types'

import { FlowerKnightGirl } from '../../types'

export const attributeText = (value: Unit.Attribute): string => {
  switch (value) {
    case Unit.Attribute.blue:
      return '打'

    case Unit.Attribute.red:
      return '斬'

    case Unit.Attribute.yellow:
      return '突'

    default:
      return '魔'
  }
}

export const favoriteText = (value: Unit.Favorite): string => {
  switch (value) {
    case Unit.Favorite.cake:
      return 'ケーキ'

    case Unit.Favorite.book:
      return '本'

    case Unit.Favorite.doll:
      return 'ぬいぐるみ'

    default:
      return '宝石'
  }
}

export const totalStats = (unit: FlowerKnightGirl) => unit.hp + unit.attack + unit.defense
