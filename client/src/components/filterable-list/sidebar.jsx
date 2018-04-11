import React from 'react'
import $ from 'jquery'

import purpleIcon from '../fkg-item/images/purple.png'
import yellowIcon from '../fkg-item/images/yellow.png'
import redIcon from '../fkg-item/images/red.png'
import blueIcon from '../fkg-item/images/blue.png'

class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props)

    this.starRange = React.createRef()
  }

  componentDidMount() {
    this.$starRange = $(this.starRange.current)
    const { minStar, maxStar, onValueChange } = this.props

    this.$starRange.slider({
      range: true,
      min: 2,
      max: 6,
      values: [ minStar, maxStar ],
      slide: (event, ui) => {
        onValueChange('minStar', ui.values[0])
        onValueChange('maxStar', ui.values[1])
      },
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { minStar, maxStar } = this.props
    this.$starRange.slider('values', minStar, maxStar)
  }

  componentWillUnmount() {
    this.$starRange.slider('destroy')
  }

  render() {
    const {
      sortBy, onValueChange, redAttr, blueAttr, yellowAttr, purpleAttr,
      minStar, maxStar, obtainBy
    } = this.props

    return (
      <div className="filterable-list_sidebar">
        <div className="group">
          <div className="sort-group select-group">
            <strong>SORT BY</strong>
            <select
              className="form-control"
              value={sortBy}
              onChange={event => onValueChange('sortBy', event.target.value)}
            >
              <option value="id">ID</option>
              <option value="name">Name</option>
              <option value="star">Rarity</option>
              <option value="stats.total">Total stats</option>
              <option value="stats.hp">HP</option>
              <option value="stats.attack">Attack</option>
              <option value="stats.defense">Defense</option>
              <option value="stats.speed">Speed</option>
            </select>
          </div>
        </div>

        <div className="group">
          <h6 className="group-header">FILTERS</h6>

          <div className="group-item checkbox-group">
            <strong>Attribute</strong>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="redAttr"
                checked={redAttr}
                onChange={event => onValueChange('redAttr', event.target.checked)}
              />
              <label className="custom-control-label" htmlFor="redAttr">
                <img src={redIcon} attr="剣" />
                Red
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="blueAttr"
                checked={blueAttr}
                onChange={event => onValueChange('blueAttr', event.target.checked)}
              />
              <label className="custom-control-label" htmlFor="blueAttr">
                <img src={blueIcon} attr="剣" />
                Blue
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="yellowAttr"
                checked={yellowAttr}
                onChange={event => onValueChange('yellowAttr', event.target.checked)}
              />
              <label className="custom-control-label" htmlFor="yellowAttr">
                <img src={yellowIcon} attr="剣" />
                Yellow
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="purpleAttr"
                checked={purpleAttr}
                onChange={event => onValueChange('purpleAttr', event.target.checked)}
              />
              <label className="custom-control-label" htmlFor="purpleAttr">
                <img src={purpleIcon} attr="剣" />
                Purple
              </label>
            </div>
          </div>

          <div className="group-item star-group">
            <strong>Star</strong>
            <div className="current-selections">
              <span>{minStar}</span>
              <i>-</i>
              <span>{maxStar}</span>
            </div>
            <div ref={this.starRange}></div>
            <div className="limit">
              <span>2</span>
              <span>6</span>
            </div>
          </div>

          <div className="group-item select-group">
            <strong>Obtain by</strong>
            <select
              className="form-control"
              value={obtainBy}
              onChange={event => onValueChange('obtainBy', event.target.value)}
            >
              <option value="">Select value</option>
              <option value="gacha">プレミアムガチャ</option>
              <option value="event">イベント</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
