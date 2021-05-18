import { memo } from 'react'
import styled from 'styled-components'

import LazyImage from '../../../components/lazy-image'
import LazyLoad from '../../../components/lazy-load'
import { FlowerKnightGirl } from '../../../types'
import { attributeText, favoriteText, totalStats } from '../units.utils'

interface UnitListItemProps {
  unit: FlowerKnightGirl
}

const UnitImage = styled(LazyImage)`
  width: 50px;
`

const unitImageAlt = (index: number) => {
  switch (index) {
    case 0:
      return '進化前'
    case 1:
      return '進化後'
    default:
      return '開花後'
  }
}

const UnitListItem = memo(function UnitListItem({ unit }: UnitListItemProps) {
  return (
    <LazyLoad>
      <td>{unit.code}</td>
      <td>
        {unit.images.map((image, index) => (
          <UnitImage
            key={image.url}
            src={image.url}
            placeholderSrc="https://via.placeholder.com/50x50"
            alt={unitImageAlt(index)}
          />
        ))}
      </td>
      <td>{unit.name}</td>
      <td>{attributeText(unit.attribute)}</td>
      <td>★{unit.star}</td>
      <td>{totalStats(unit)}</td>
      <td>{unit.hp}</td>
      <td>{unit.attack}</td>
      <td>{unit.defense}</td>
      <td>{favoriteText(unit.favorite)}</td>
    </LazyLoad>
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
