import React from 'react'

import FilterableList from '../components/filterable-list'
import FKGItem from '../components/fkg-item'
import FKGList from '../components/fkg-list'

import { FKGApi, MyListApi } from '../api'

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fkgs: null,
      loading: true,
    }

    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {
    FKGApi.all()
      .then((response) => this.setState({ fkgs: response.data, loading: false }))
      .catch(error => console.log(error))
  }

  handleAdd(fkg) {
    MyListApi.add(fkg)
    console.log(`Added FKG No.${fkg.id}`)
  }

  renderList = (fkgs, loading) => (
    <FKGList
      fkgs={fkgs}
      loading={loading}
      renderItem={(fkg) => (
        <FKGItem fkg={fkg}
          context="Add"
          onClick={this.handleAdd}
        />
      )}
    />
  )

  render() {
    const { fkgs, loading } = this.state

    return (
      <FilterableList
        fkgs={fkgs}
        loading={loading}
        renderList={this.renderList}
      />
    )
  }
}

export default Gallery
