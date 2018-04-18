import React from 'react'

import Layout from '../layout/layout'
import { AutoComplete, Checkbox, CheckboxGroup, Select, Slider } from '../common/form'

function onChange(value) {
  console.log(value);
}

export default class Test extends React.Component {
  state = {
    value: '',
    source: [
      "Johnson Baby",
      "Johnson Baby",
      "Johnson Baby",
    ],
    models: [
      { label: 'ID', value: 'id' },
      { label: 'Name', value: 'name' },
      { label: 'Rarity', value: 'star' },
      { label: 'Total stats', value: 'stats.total' },
      { label: 'HP', value: 'stats.hp' },
      { label: 'Attack', value: 'stats.attack' },
      { label: 'Defense', value: 'stats.defense' },
      { label: 'Speed', value: 'stats.speed' },
    ],
    star: [2, 6]
  }

  render() {
    return (
      <Layout>
        <div className="page-content container">
          <AutoComplete
            source={this.state.source}
            onChange={onChange}
          />
          <CheckboxGroup>
            <Checkbox onChange={onChange}>
              Red
            </Checkbox>

            <Checkbox onChange={onChange}>
              White
            </Checkbox>
          </CheckboxGroup>

          <div>
            <button className="btn btn-primary" type="button">
              Button
            </button>
          </div>

          <div>
            <Select
              onChange={onChange}
              models={this.state.models}
            >
              SORT BY
            </Select>
          </div>

          <div>
            <Slider
              onChange={onChange}
              value={this.state.star}
              min={2}
              max={6}
            />
          </div>
        </div>
      </Layout>
    )
  }
}
