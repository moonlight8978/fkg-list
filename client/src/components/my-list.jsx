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
    MyListApi.all()
      .then(fkgs => {
        console.log(fkgs);
        this.setState({ fkgs })
      })
  }

  handleRemove(target) {
    MyListApi.remove(target)
    const i = this.state.fkgs.findIndex(e => e.id === target.id)
    let fkgs = this.state.fkgs.slice()
    if (i > 0) {
      fkgs.splice(i, 1)
      this.setState({ fkgs })
    }
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
