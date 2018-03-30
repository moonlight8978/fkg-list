import React from 'react';

import FilterableList from './filterable-list';
import FKGItem from './fkg-item';

import { FKGApi } from '../api';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fkgs: null,
    };
  }

  componentDidMount() {
    FKGApi.all()
      .then((response) => this.setState({ fkgs: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <FilterableList items={this.state.fkgs} ItemComponent={FKGItem} >

      </FilterableList>
    );
  }
}

export default Gallery;
