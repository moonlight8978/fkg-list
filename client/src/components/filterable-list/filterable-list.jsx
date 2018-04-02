import React from 'react'

import Header from './header'
import Sidebar from './sidebar'
import FKGList from '../fkg-list'
import sort from '../../utils/sort'

import './filterable-list.css'

class FilterableList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      keyword: '',
      items: null,
      itemNames: null,
      filter: {
        attribute: '',
        minStar: 2,
        maxStar: 6,
      },
      sortBy: 'id',
    }

    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStarChange = this.handleStarChange.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items === null) {
      return null
    }
    const itemNames = nextProps.items.map((item) => item.name)
    return { items: nextProps.items, itemNames }
  }

  handleValueChange(property, newValue) {
    this.setState({ [`${property}`]: newValue })
  }

  handleStarChange(min, max) {
    this.setState({
      filter: {
        ...this.state.filter,
        minStar: min,
        maxStar: max,
      },
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ items: null })
    setTimeout(() => {
      this.setState({ items: this.props.items })
    }, 3000)
  }

  render() {
    const { filter, sortBy, items, keyword, itemNames } = this.state
    const { ListItem, onAction } = this.props

    return (
      <div>
        <Header
          keyword={keyword}
          itemNames={itemNames}
          onValueChange={this.handleValueChange}
          onSubmit={this.handleSubmit}
        />

        <div className="row">
          <div className="col-3">
            <Sidebar
              {...filter}
              sortBy={sortBy}
              onStarChange={this.handleStarChange}
              onValueChange={this.handleValueChange}
              onSubmit={this.handleSubmit}
            />
          </div>

          <div className="col-9">
            <FKGList
              fkgs={items}
              ListItem={ListItem}
              onAction={onAction}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default FilterableList
