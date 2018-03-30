import React from 'react';

import removeable from './removeable';
import FKGItem from './fkg-item';
import FilterableList from './filterable-list';

import { FKGApi } from '../api';

class MyList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fkgs: null,
    };

    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    FKGApi.all()
      .then((response) => this.setState({ fkgs: response.data }))
      .catch(error => console.log(error));
  }

  handleRemove(target) {
    const fkgs = this.state.fkgs.slice();
    const index = fkgs.findIndex((fkg) => fkg.id === target.id);
    fkgs.splice(index, 1);
    this.setState({ fkgs: fkgs })
    console.log(`Removed FKG No.${target.id}`);
  }

  render() {
    const ItemComponent = removeable(FKGItem, this.handleRemove);

    return (
      <FilterableList
        items={this.state.fkgs}
        ItemComponent={ItemComponent}
      >

      </FilterableList>
    );
  }
}

export default MyList;
