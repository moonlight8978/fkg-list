import React from 'react'

import FKGItem from '../components/fkg-item'
import FilterableList from '../components/filterable-list'

import { MyListApi } from '../api'

class MyList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fkgs: null,
      loading: true,
    }

    this.handleRemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    MyListApi.all()
      .then(fkgs => {
        console.log(fkgs);
        this.setState({ fkgs, loading: false })
      })
  }

  handleRemove(target) {
    MyListApi.remove(target)
    const i = this.state.fkgs.findIndex(e => e.id === target.id)
    let fkgs = this.state.fkgs.slice()
    if (i > -1) {
      fkgs.splice(i, 1)
      this.setState({ fkgs })
    }
    console.log(`Removed FKG No.${target.id}`)
  }

  renderItem = (fkg) => (
    <FKGItem fkg={fkg}
      context="Remove"
      onClick={this.handleRemove}
    />
  )

  render() {
    const { fkgs, loading } = this.state

    return (
      <FilterableList
        fkgs={fkgs}
        loading={loading}
        renderItem={this.renderItem}
      />
    )
  }
}

export default MyList
