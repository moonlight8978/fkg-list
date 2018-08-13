import React from 'react'

import { Slider, Checkbox, CheckboxGroup, Select } from '../../common/form'

const sortModels = [
  { label: 'ID', value: 'id' },
  { label: 'Name', value: 'name' },
  { label: 'Rarity', value: 'star' },
  { label: 'Total stats', value: 'stats.total' },
  { label: 'HP', value: 'stats.hp' },
  { label: 'Attack', value: 'stats.attack' },
  { label: 'Defense', value: 'stats.defense' },
  { label: 'Speed', value: 'speed' },
]

const obtainByModels = [
  { label: 'Select value', value: '' },
  { label: 'プレミアムガチャ', value: 'gacha' },
  { label: 'イベント', value: 'event' },
]

function Filter({
  sortBy, onValueChange, redAttr, blueAttr, yellowAttr, purpleAttr,
  star, obtainBy, reverseSort
}) {

  return (
    <div className="filterable-list_sidebar">
      <div className="group">
        <Select
          onChange={value => onValueChange('sortBy', value)}
          models={sortModels}
          value={sortBy}
        >
          SORT BY
        </Select>

        <Checkbox
          onChange={value => onValueChange('reverseSort', value)}
          checked={reverseSort}
        >
          Reverse sort
        </Checkbox>
      </div>

      <div className="group">
        <h6 className="group-header">FILTERS</h6>

        <div className="group-item checkbox-group">
          <strong>Attribute</strong>

          <CheckboxGroup>
            <Checkbox
              onChange={value => onValueChange('redAttr', value)}
              checked={redAttr}
            >
              Red
            </Checkbox>

            <Checkbox
              onChange={value => onValueChange('blueAttr', value)}
              checked={blueAttr}
            >
              Blue
            </Checkbox>

            <Checkbox
              onChange={value => onValueChange('yellowAttr', value)}
              checked={yellowAttr}
            >
              Yellow
            </Checkbox>

            <Checkbox
              onChange={value => onValueChange('purpleAttr', value)}
              checked={purpleAttr}
            >
              Purple
            </Checkbox>
          </CheckboxGroup>
        </div>

        <div className="star-group">
          <Slider
            onChange={value => onValueChange('star', value)}
            value={star}
            min={2}
            max={6}
          />
        </div>

        <Select
          onChange={value => onValueChange('obtainBy', value)}
          models={obtainByModels}
          value={obtainBy}
        >
          Obtain by
        </Select>
      </div>
    </div>
  )
}

export default Filter
