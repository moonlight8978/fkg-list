import React from 'react';

import Header from './header';
import Sidebar from './sidebar';
import FKGList from '../fkg-list';

import './filterable-list.css';

class FilterableList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      items: null,
      filter: {
        attribute: '',
        minStar: 2,
        maxStar: 6,
      },
      sortBy: 'id',
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStarChange = this.handleStarChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items === null) {
      return null;
    }
    return { items: nextProps.items };
  }

  handleValueChange(property, newValue) {
    this.setState({ [`${property}`]: newValue });
  }

  handleStarChange(min, max) {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        minStar: min,
        maxStar: max,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ items: null });
    setTimeout(() => {
      this.setState({ items: this.props.items });
    }, 3000);
  }

  render() {
    return (
      <div>
        <Header
          onValueChange={this.handleValueChange}
          onSubmit={this.handleSubmit}
        />

        <div className="row">
          <div className="col-3">
            <Sidebar
              {...this.state.filter}
              sortBy={this.state.sortBy}
              onStarChange={this.handleStarChange}
              onValueChange={this.handleValueChange}
              onSubmit={this.handleSubmit}
            />
          </div>

          <div className="col-9">
            <FKGList
              fkgs={this.state.items}
              ItemComponent={this.props.ItemComponent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FilterableList;
