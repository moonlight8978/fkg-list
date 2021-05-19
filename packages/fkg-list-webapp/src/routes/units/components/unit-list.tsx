import { Unit } from 'fkg-list-types'
import { memo } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import styled from 'styled-components'

import LazyImage from '../../../components/lazy-image'
import LazyLoad from '../../../components/lazy-load'
import { FlowerKnightGirl } from '../../../types'

interface UnitListItemProps {
  unit: FlowerKnightGirl
}

const UnitImage = styled(LazyImage)`
  width: 50px;
`

const UnitListItem = memo(function UnitListItem({ unit }: UnitListItemProps) {
  const intl = useIntl()

  return (
    <LazyLoad>
      <td>{unit.code}</td>
      <td>
        {unit.images.map((image, index) => (
          <UnitImage
            key={image.url}
            src={image.url}
            placeholderSrc="https://via.placeholder.com/50x50"
            alt={intl.formatMessage({ id: `unit.images.${index}` })}
          />
        ))}
      </td>
      <td>{unit.name}</td>
      <td>
        <FormattedMessage id={`unit.attribute.${Unit.Attribute[unit.attribute]}`} />
      </td>
      <td>
        <FormattedMessage id="unit.rarity.value" values={{ value: unit.star }} />
      </td>
      <td>{unit.totalStats}</td>
      <td>{unit.hp}</td>
      <td>{unit.attack}</td>
      <td>{unit.defense}</td>
      <td>
        <FormattedMessage id={`unit.favorite.${Unit.Favorite[unit.favorite]}`} />
      </td>
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
