import React from 'react'
import $ from 'jquery'

class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props)

    this.starRange = React.createRef()
  }

  componentDidMount() {
    this.$starRange = $(this.starRange.current)
    const { minStar, maxStar, onStarChange } = this.props

    this.$starRange.slider({
      range: true,
      min: 2,
      max: 6,
      values: [ minStar, maxStar ],
      slide: (event, ui) => onStarChange(ui.values[0], ui.values[1]),
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
    const { sortBy, onValueChange } = this.props
    return (
      <div className="filterable-list_sidebar">
        <div className="group">
          <h6>SORT BY</h6>
          <div>
            <select
              value={sortBy}
              onChange={event => onValueChange('sortBy', event.target.value)}
            >
              <option value="id">ID</option>
              <option value="stats.hitPoint">HP</option>
              <option value="stats.attack">Attack</option>
              <option value="stats.defense">Defense</option>
              <option value="stats.speed">Speed</option>
            </select>
          </div>
        </div>

        <div className="group">
          <h6>FILTERS</h6>
          <div>
            <strong>Star</strong>
            <div ref={this.starRange}></div>
          </div>

          <div>
            <strong>Attribute</strong>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
