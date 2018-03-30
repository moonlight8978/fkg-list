import React from 'react';
import $ from 'jquery';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.starRange = React.createRef();
  }

  componentDidMount() {
    const $starRange = $(this.starRange.current);
    const { minStar, maxStar, onStarChange } = this.props;

    $starRange.slider({
      range: true,
      min: 2,
      max: 6,
      values: [ minStar, maxStar ],
      slide: (event, ui) => onStarChange(ui.values[0], ui.values[1]),
    });
  }

  componentWillUnmount() {
    const $starRange = $(this.starRange.current);
    $starRange.slider('destroy');
  }

  render() {
    const { sortBy, onValueChange } = this.props;
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
            <div ref={this.starRange}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
