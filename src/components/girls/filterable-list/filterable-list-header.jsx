import React from 'react'

import './filterable-list-header.scss'

class FilterableListHeader extends React.Component {
  render() {
    const { searchKeyword, sortBy, reverseSort, total, onChange, onKeywordChange } = this.props

    return (
      <div className="girl-list-header">
        <div className="form-group">
          <input
            className="form-control keyword-text"
            value={searchKeyword}
            onChange={event => onKeywordChange(event.target.value)}
            placeholder="名前/戦闘スキル名"
          />
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-2">
            {total} results
          </div>
          <div className="col-sm-8 col-md-4">
            <div className="form-group d-flex">
              <label className="pr-2 text-placeholder">Sort by:</label>
              <select
                value={sortBy}
                className="form-control sort-select"
                onChange={event => onChange('sortBy', event.target.value)}
              >
                <option value="id">ID</option>
                <option value="originalStats.hitPoint">Hit Point</option>
                <option value="originalStats.attack">Attack</option>
                <option value="originalStats.defense">Defense</option>
                <option value="bonusStats.hitPoint">Bonus Hit Point</option>
                <option value="bonusStats.attack">Bonus Attack</option>
                <option value="bonusStats.defense">Bonus Defense</option>
                <option value="totalStats.hitPoint">Total Hit Point</option>
                <option value="totalStats.attack">Total Attack</option>
                <option value="totalStats.defense">Total Defense</option>
                <option value="allStats">All stats</option>
                <option value="originalStats.speed">Speed</option>
              </select>
            </div>
          </div>

          <div className="col-sm-4 col-md-4">
            <div className="form-group">
              <input
                type="checkbox"
                checked={reverseSort}
                onChange={event => onChange('reverseSort', event.target.checked)}
              />
              <label className="pl-2">Reverse</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterableListHeader
