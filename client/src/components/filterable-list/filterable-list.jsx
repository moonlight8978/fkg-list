import React from 'react'

import Sort from '../../utils/sort'
import SortOneLevelDeep from '../../utils/sort-one-level-deep'
import SortTwoLevelDeep from '../../utils/sort-two-level-deep'
import CompareArray from '../../utils/compare-array'

import Loading from '../../common/loading'
import DataView from './data'
import FilterableListHeader from './header'

class FilterableList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchKeyword: '',
      sortBy: 'id',
      reverseSort: false,
    }

    this.timeout = null

    this.handleChange = this.handleChange.bind(this)
    this.handleKeywordChange = this.handleKeywordChange.bind(this)
  }

  handleKeywordChange(value) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      console.log('keyword update')
      this.setState({ searchKeyword: value })
    }, 750)
  }

  handleChange(property, value) {
    this.setState({ [`${property}`]: value })
  }

  render() {
    console.log('render');
    const { girls } = this.props

    if (girls) {
      return (
        <div>
          <FilterableListHeader
            onChange={this.handleChange}
            onKeywordChange={this.handleKeywordChange}
            total={0}
          />

          <DataView
            girls={girls}
            reverseSort={this.state.reverseSort}
            sortBy={this.state.sortBy}
            searchKeyword={this.state.searchKeyword}
          />
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Loading(FilterableList)
// export default FilterableList
