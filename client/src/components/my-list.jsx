import React from 'react'

import { RemoveableFKGItem } from './fkg-item'
import FilterableList from './filterable-list'

import { MyListApi } from '../api'

class MyList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fkgs: null,
    }

    this.handleRemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    this.setState({ fkgs: MyListApi.myList })
  }

  handleRemove(target) {
    MyListApi.remove(target)
    this.setState({ fkgs: MyListApi.myList })
    console.log(`Removed FKG No.${target.id}`)
  }

  render() {
    return (
      <FilterableList
        items={this.state.fkgs}
        ListItem={RemoveableFKGItem}
        onAction={this.handleRemove}
      />
    )
  }
}

export default MyList
