import { Unit } from 'fkg-list-types'
import { memo } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { generatePath, Link } from 'react-router-dom'
import styled from 'styled-components'

import LazyImage from '../../../components/lazy-image'
import LazyLoad from '../../../components/lazy-load'
import { routePaths } from '../../../config/route-defs'
import { attributeColor } from '../../../domain/unit'
import { FlowerKnightGirl } from '../../../types'

interface UnitListItemProps {
  unit: FlowerKnightGirl
  ordinal: number
}

const UnitImage = styled(LazyImage)`
  width: 50px;
`

const UnitName = styled(Link)`
  text-decoration: none;
`

function UnitListItem({ unit, ordinal }: UnitListItemProps) {
  const intl = useIntl()

  return (
    <LazyLoad>
      <td>{ordinal}</td>
      <td>{unit.code}</td>
      <td>
        {unit.images.map((image, index) => (
          <UnitImage
            key={image.url}
            // src={image.url}
            src="https://via.placeholder.com/50x50"
            placeholderSrc="https://via.placeholder.com/50x50"
            alt={intl.formatMessage({ id: `unit.images.${index}` })}
          />
        ))}
      </td>
      <td>
        <UnitName to={generatePath(routePaths.unitDetails, { code: unit.code, star: unit.star })}>{unit.name}</UnitName>
      </td>
      <td style={{ color: attributeColor(unit) }}>
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
}

interface UnitListProps {
  units: FlowerKnightGirl[]
}

export const UnitList = memo(function UnitList({ units }: UnitListProps) {
  return (
    <tbody className="animate__animated animate__fadeIn">
      {units.map((unit, index) => (
        <UnitListItem key={unit.id} unit={unit} ordinal={index + 1} />
      ))}
    </tbody>
  )
})
