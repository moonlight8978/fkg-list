import React from 'react'
import MediaQuery from 'react-responsive'

import Header from './header'
import Sidebar from './sidebar'
import Nav from './nav'
import NavBottom from '../../layout/nav-bottom'
import sort from '../../utils/sort'
import filter from '../../utils/filter'

import './filterable-list.css'

class FilterableList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fkgs: null,
      itemNames: null,
      loading: true,
      filter: {
        keyword: '',
        sortBy: 'id',
        redAttr: true,
        blueAttr: true,
        yellowAttr: true,
        purpleAttr: true,
        minStar: 2,
        maxStar: 6,
        obtainBy: '',
      },
    }

    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStarChange = this.handleStarChange.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.fkgs === null) {
      return { loading: nextProps.loading }
    }
    const itemNames = nextProps.fkgs.map((item) => item.name)
    return { fkgs: nextProps.fkgs, itemNames, loading: nextProps.loading }
  }

  handleValueChange(key, value) {
    this.setState({ filter: { ...this.state.filter, [key]: value} })
  }

  handleStarChange(minStar, maxStar) {
    this.setState({ filter: { ...this.state.filter, minStar, maxStar } })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.filter)
    this.setState({ loading: true })
    let filtered = filter(this.props.fkgs, this.state.filter)
    const fkgs = sort(filtered, this.state.filter)
    const itemNames = fkgs.map((fkg) => fkg.name)
    setTimeout(() => {
      this.setState({ fkgs, itemNames, loading: false })
    }, 1000);

  }

  render() {
    const { fkgs, itemNames, loading, filter } = this.state
    const { keyword, ...rest } = filter
    const { renderList } = this.props

    return (
      <div>
        <MediaQuery query="(min-width: 992px)">
          <Header
            keyword={keyword}
            itemNames={itemNames}
            onValueChange={this.handleValueChange}
            onSubmit={this.handleSubmit}
          />
        </MediaQuery>

        <div className="row" id="wrapper">
          <MediaQuery query="(min-width: 992px)">
            <div className="col-lg-3">
              <Sidebar
                {...rest}
                onValueChange={this.handleValueChange}
                onSubmit={this.handleSubmit}
              />
            </div>
          </MediaQuery>

          <div className="col-12 col-lg-9">
            {renderList(fkgs, loading)}
          </div>
        </div>
        
        <MediaQuery query="(max-width: 991px)">
          <NavBottom
            render={(props) => <Nav {...props} onSubmit={this.handleSubmit} />}
          />
        </MediaQuery>
      </div>
    )
  }
}

export default FilterableList
