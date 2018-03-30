import React from 'react';

import Header from './header';
import Sidebar from './sidebar';

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
    console.log(nextProps)
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
    console.log("Sort and filtering");
  }

  render() {
    console.log(this.state);
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
              onStarChange={this.handleStarChange}
              sortBy={this.state.sortBy}
              onValueChange={this.handleValueChange}
            />
          </div>

          <div className="col-9">
            <table>
              <tbody>
                {this.state.items && this.state.items.map((fkg) => (
                  <tr key={fkg.id}>
                    {/* <td><img src={fkg.images[fkg.images.length - 1]} /></td> */}
                    <td>{fkg.id}</td>
                    <td>{fkg.name}</td>
                    <td>{fkg.attribute}</td>
                    <td>{fkg.nation}</td>
                    <td>{fkg.stats.total}</td>
                    <td>{fkg.skills.active.name}</td>
                    <td>{fkg.skills.passive && fkg.skills.passive.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterableList;
