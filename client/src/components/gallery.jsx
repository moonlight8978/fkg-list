import React from 'react'

import FilterableList from './filterable-list'
import { AddableFKGItem } from './fkg-list'

import { FKGApi, MyListApi } from '../api'

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fkgs: null,
    }

    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {
    FKGApi.all()
      .then((response) => this.setState({ fkgs: response.data }))
      .catch(error => console.log(error))
  }

  handleAdd(fkg) {
    MyListApi.add(fkg)
    console.log(`Added FKG No.${fkg.id}`)
  }

  render() {
    return (
      <FilterableList
        items={this.state.fkgs}
        ListItem={AddableFKGItem}
        onAction={this.handleAdd}
      />
    )
  }
}

export default Gallery
