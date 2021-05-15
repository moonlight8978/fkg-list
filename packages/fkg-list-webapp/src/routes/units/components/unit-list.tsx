import { memo } from 'react'

import { FlowerKnightGirl } from '../../../types'
import { attributeText, favoriteText, totalStats } from '../units.utils'

interface UnitListItemProps {
  unit: FlowerKnightGirl
}

const UnitListItem = memo(function UnitListItem({ unit }: UnitListItemProps) {
  return (
    <tr key={unit.id}>
      <td>{unit.code}</td>
      <td>{unit.name}</td>
      <td>{attributeText(unit.attribute)}</td>
      <td>★{unit.star}</td>
      <td>{totalStats(unit)}</td>
      <td>{unit.hp}</td>
      <td>{unit.attack}</td>
      <td>{unit.defense}</td>
      <td>{favoriteText(unit.favorite)}</td>
    </tr>
  )
})

interface UnitListProps {
  units: FlowerKnightGirl[]
}

export const UnitList = memo(function UnitList({ units }: UnitListProps) {
  return (
    <>
      {units.map((unit) => (
        <UnitListItem key={unit.id} unit={unit} />
      ))}
    </>
  )
})
