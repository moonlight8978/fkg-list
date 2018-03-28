import React from 'react'

import Sort from '../../../utils/sort'
import SortOneLevelDeep from '../../../utils/sort-one-level-deep'
import SortTwoLevelDeep from '../../../utils/sort-two-level-deep'

import SwitchableView from './switchable-view'
import ListView from '../list'

class DataView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      girls: props.girls,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchKeyword !== nextProps.searchKeyword) {
      this.filterGirls(nextProps.searchKeyword)
    }
  }

  filterGirls(searchKeyword) {
    console.log('filtering');
    const girls = this.props.girls.filter(girl => {
      const valid = girl.name.indexOf(searchKeyword) >= 0

      return valid
    })

    this.setState({ girls })
    console.log('filtering done');
  }

  sortGirls() {
    console.log('sorting')
    let girls = [...this.state.girls]
    const { sortBy, reverseSort } = this.props

    girls = (() => {
      switch (this.props.sortBy.split('.').length) {
        case 1:
          return (new Sort(SortOneLevelDeep)).sort(girls, sortBy)
        case 2:
          return (new Sort(SortTwoLevelDeep)).sort(girls, sortBy)
        default:
          return girls
      }
    })()

    if (reverseSort) {
      girls = girls.reverse()
    }

    console.log('sorting done')

    return girls
  }

  render() {
    const girls = this.sortGirls()

    return (
      <SwitchableView girls={girls}/>
    )
  }
}

export default DataView
