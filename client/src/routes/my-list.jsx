import React from 'react'

import FKGItem from '../components/fkg-item'
import FilterableList from '../components/filterable-list'
import { Layout } from '../layout'

import { MyListApi, FKGApi } from '../api'

class MyList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fkgs: [],
      fkgNames: [],
      loading: true,
    }

    this.handleRemove = this.handleRemove.bind(this)
  }

  async componentDidMount() {
    const [fkgs, fkgNames] = [await MyListApi.all(), await FKGApi.getNames()]
    this.setState({ fkgs, fkgNames, loading: false })
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
      renderDropdown={() => (
        <button type="button" className="dropdown-item" onClick={() => this.handleRemove(fkg)} >
          Remove {fkg.name}
        </button>
      )}
    />
  )

  render() {
    return (
      <Layout hasNavBottom>
        <FilterableList
          {...this.state}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default MyList
