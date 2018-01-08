import React from 'react'

import Loading from '../../../common/loading'
import GirlList from '../list'
import Sort from '../../../utils/sort'
import SortOneLevelDeep from '../../../utils/sort-one-level-deep'
import SortTwoLevelDeep from '../../../utils/sort-two-level-deep'

class FilterableList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      girls: props.girls,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchKeyword !== nextProps.searchKeyword) {
      console.log('filtering')
      this.filterGirls(nextProps.searchKeyword)
    }
  }

  filterGirls(keyword) {
    // filter
    const girls = this.props.girls.filter(girl => {
      const valid =
        girl.name.indexOf(keyword) >= 0
        || girl.skills.active.name.indexOf(keyword) >= 0

      return valid
    })

    this.setState({ girls })
  }

  sortGirls() {
    console.log('sorting')
    let girls = [...this.state.girls]
    const { sortBy, reverseSort } = this.props

    girls = (() => {
      switch (this.props.sortBy.split('.').length) {
        case 1:
          return (new Sort(new SortOneLevelDeep())).sort(girls, sortBy)
        case 2:
          return (new Sort(new SortTwoLevelDeep())).sort(girls, sortBy)
        default:
          return girls
      }
    })()

    if (reverseSort) {
      girls = girls.reverse()
    }

    return girls
  }

  render() {
    const { constants } = this.props

    const girlsToRender = this.sortGirls()

    return (
      <GirlList girls={girlsToRender} {...constants} />
    )
  }
}

export default Loading(FilterableList)
