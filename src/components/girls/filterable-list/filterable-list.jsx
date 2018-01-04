import React from 'react'

import ListHeader from '../list-header'
import GirlList from '../list'
import Sort from '../../../utils/sort'
import SortOneLevelDeep from '../../../utils/sort-one-level-deep'
import SortTwoLevelDeep from '../../../utils/sort-two-level-deep'

class FilterableList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchKeyword: '',
      sortBy: 'id',
      reverseSort: false,
    }

    this.handleSearchKeywordChange = this.handleSearchKeywordChange.bind(this)
    this.handleSortByChange = this.handleSortByChange.bind(this)
    this.handleRevertSortChange = this.handleRevertSortChange.bind(this)
  }

  handleSearchKeywordChange(searchKeyword) {
    this.setState({ searchKeyword })
  }

  handleSortByChange(sortBy) {
    this.setState({ sortBy })
  }

  handleRevertSortChange(reverseSort) {
    this.setState({ reverseSort })
  }

  filterGirls() {
    // filter
    let girls = this.props.girls.filter(girl => {
      const valid =
        girl.name.indexOf(this.state.searchKeyword) >= 0
        || girl.skills.active.name.indexOf(this.state.searchKeyword) >= 0

      return valid
    })

    // sort
    girls = (() => {
      switch (this.state.sortBy.split('.').length) {
        case 1:
          return (new Sort(new SortOneLevelDeep())).sort(girls, this.state.sortBy)
        case 2:
          return (new Sort(new SortTwoLevelDeep())).sort(girls, this.state.sortBy)
        default:
          return girls
      }
    })()

    // reverse results
    if (this.state.reverseSort) {
      girls = girls.reverse()
      // return []
    }

    return girls
  }

  render() {
    const { attributes } = this.props

    let list = null
    if (this.props.girls) {
      const girls = this.filterGirls()

      list = <GirlList girls={girls} attributes={attributes} />
    }

    return (
      <div>
        <ListHeader
          onSearchKeywordChange={this.handleSearchKeywordChange}
          onSortByChange={this.handleSortByChange}
          onRevertSortChange={this.handleRevertSortChange}
          {...this.state}
        />

        {list}
      </div>
    )
  }
}

export default FilterableList
