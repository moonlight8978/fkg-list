import React from 'react';

import FilterableList from './filterable-list';

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
      <FilterableList items={this.state.fkgs}>

      </FilterableList>
    );
  }
}

export default Gallery;
