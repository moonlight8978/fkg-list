import React from 'react'

import './stats.scss'

class Stats extends React.Component {
  constructor(props) {
    super(props)

    this.handleFieldChange = this.handleFieldChange.bind(this)
  }

  handleFieldChange(property, event) {
    let keys = property.split('.')
    const lastKey = keys.pop()
    let newGirl = Object.assign({}, this.props.girl)
    let currentRef = newGirl
    keys.forEach(key => {
      currentRef = currentRef[key]
    })
    currentRef[lastKey] = event.target.valueAsNumber
    this.props.onGirlChange(newGirl)
  }

  render() {
    const { girl } = this.props

    return (
      <div>
        <h6>Statistics</h6>

        <div className="form-group">
          <label>Hit point</label>
          <div className="add-character-stats-group">
            <div className="original-stats">
              <input
                type="number"
                className="form-control"
                value={girl.originalStats.hitPoint}
                onChange={event => this.handleFieldChange('originalStats.hitPoint', event)}
              />
            </div>
            <div className="plus">
              +
            </div>
            <div className="bonus-stats">
              <input
                type="number"
                className="form-control"
                value={girl.bonusStats.hitPoint}
                onChange={event => this.handleFieldChange('bonusStats.hitPoint', event)}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Attack</label>
          <div className="add-character-stats-group">
            <div className="original-stats">
              <input
                type="number"
                className="form-control"
                value={girl.originalStats.attack}
                onChange={event => this.handleFieldChange('originalStats.attack', event)}
              />
            </div>
            <div className="plus">
              +
            </div>
            <div className="bonus-stats">
              <input
                type="number"
                className="form-control"
                value={girl.bonusStats.attack}
                onChange={event => this.handleFieldChange('bonusStats.attack', event)}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Defense</label>
          <div className="add-character-stats-group">
            <div className="original-stats">
              <input
                type="number"
                className="form-control"
                value={girl.originalStats.defense}
                onChange={event => this.handleFieldChange('originalStats.defense', event)}
              />
            </div>
            <div className="plus">
              +
            </div>
            <div className="bonus-stats">
              <input
                type="number"
                className="form-control"
                value={girl.bonusStats.defense}
                onChange={event => this.handleFieldChange('bonusStats.defense', event)}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Speed</label>
          <input
            type="number"
            className="form-control"
            value={girl.originalStats.speed}
            onChange={event => this.handleFieldChange('originalStats.speed', event)}
          />
        </div>
      </div>
    )
  }
}

export default Stats
