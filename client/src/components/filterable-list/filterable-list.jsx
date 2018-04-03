import React from 'react'

import Header from './header'
import Sidebar from './sidebar'
import FKGList from '../fkg-list'
import sort from '../../utils/sort'
import filter from '../../utils/filter'

import './filterable-list.css'

class FilterableList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: null,
      itemNames: null,
      loading: true,

      keyword: '',

      sortBy: '',

      redAttr: true,
      blueAttr: true,
      yellowAttr: true,
      purpleAttr: true,

      minStar: 2,
      maxStar: 6,

      obtainBy: '',
    }

    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStarChange = this.handleStarChange.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items === null) {
      return { loading: nextProps.loading }
    }
    const itemNames = nextProps.items.map((item) => item.name)
    return { items: nextProps.items, itemNames, loading: nextProps.loading }
  }

  handleValueChange(property, event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [`${property}`]: value })
  }

  handleStarChange(minStar, maxStar) {
    this.setState({ minStar, maxStar })
  }

  handleSubmit(event) {
    event.preventDefault()

    const {
      sortBy, redAttr, blueAttr, yellowAttr, purpleAttr,
      minStar, maxStar, obtainBy
    } = this.state

    console.log({
      sortBy, redAttr, blueAttr, yellowAttr, purpleAttr,
      minStar, maxStar, obtainBy
    });
    // this.setState({ loading: true })
    // setTimeout(() => {
    //   let items = this.state.items.slice()
    //   items.sort(function(first, second) {
    //     return second.stats.total - first.stats.total
    //   })
    //
    //   this.setState({
    //     items,
    //     loading: false
    //   })
    // }, 3000)
  }

  render() {
    const { items, itemNames, loading, keyword, ...rest } = this.state
    const { ListItem, onAction } = this.props

    return (
      <div>
        <Header
          keyword={keyword}
          itemNames={itemNames}
          onValueChange={this.handleValueChange}
          onSubmit={this.handleSubmit}
        />

        <div className="row" id="wrapper">
          <div className="col-md-3">
            <Sidebar
              {...rest}
              onStarChange={this.handleStarChange}
              onValueChange={this.handleValueChange}
              onSubmit={this.handleSubmit}
            />
          </div>

          <div className="col-md-9">
            <FKGList
              fkgs={items}
              ListItem={ListItem}
              onAction={onAction}
              loading={loading}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default FilterableList
