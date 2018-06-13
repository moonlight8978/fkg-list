import React from 'react'

import FilterableList from '../components/filterable-list'
import FKGItem from '../components/fkg-item'
import { Layout } from '../layout'

import { FKGApi, MyListApi } from '../api'

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.handleAdd = this.handleAdd.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  async fetchData(conditions = null) {
    return await FKGApi.all(conditions)
  }

  // async componentDidMount() {
  //   const [fkgs, fkgNames] = [await FKGApi.all(), await FKGApi.getNames()]
  //
  //   this.setState({ fkgs, fkgNames, loading: false })
  // }

  handleAdd(fkg) {
    MyListApi.add(fkg)
    console.log(`Added FKG No.${fkg.id}`)
  }

  renderItem = (fkg) => (
    <FKGItem fkg={fkg}
      renderDropdown={() => (
        <button type="button" className="dropdown-item" onClick={() => this.handleAdd(fkg)} >
          Add {fkg.name}
        </button>
      )}
    />
  )

  render() {
    return (
      <Layout hasNavBottom>
        <FilterableList
          fetchData={this.fetchData}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default Gallery
