import React from 'react'

import FilterableListHeader from './filterable-list-header'
import FilterableList from './filterable-list'

class FilterableListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchKeyword: '',
      sortBy: 'id',
      reverseSort: false
    }

    this.timeout = null

    this.handleChange = this.handleChange.bind(this)
    this.handleKeywordChange = this.handleKeywordChange.bind(this)
  }

  handleKeywordChange(value) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.setState({ searchKeyword: value })
    }, 750)
  }

  handleChange(property, value) {
    this.setState({ [`${property}`]: value })
  }

  render() {
    const { girls } = this.props

    return (
      <div>
        <FilterableListHeader
          onChange={this.handleChange}
          onKeywordChange={this.handleKeywordChange}
          total={girls ? girls.length : 0}
        />

        <FilterableList
          data={girls}
          {...this.state}
          {...this.props}
        />
      </div>
    )
  }
}

export default FilterableListContainer
