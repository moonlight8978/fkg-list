import React from 'react'

import FKGItem from '../components/fkg-item'
import FilterableList from '../components/filterable-list'
import { Layout } from '../layout'

import { MyListApi } from '../api'

class MyList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // To track the list's change
      count: 0
    }

    this.handleRemove = this.handleRemove.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  async fetchData(conditions = null) {
    console.log(conditions);
    return await MyListApi.all(conditions)
  }

  handleRemove(target) {
    MyListApi.remove(target)
    this.setState({ count: this.state.count + 1 })
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
          fetchData={this.fetchData}
        />
      </Layout>
    )
  }
}

export default MyList
