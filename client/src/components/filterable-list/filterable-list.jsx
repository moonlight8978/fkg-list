import React from 'react'
import MediaQuery from 'react-responsive'

import Header from './header'
import Filter from './filter'
import Nav from './nav'
import { NavBottom } from '../../layout'
import FKGList from '../fkg-list'
import { BoxItem } from '../../common/box'
import sort from '../../utils/sort'
import filter from '../../utils/filter'

import './filterable-list.css'

class FilterableList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fkgs: [],
      filter: {
        keyword: '',
        sortBy: 'id',
        redAttr: true,
        blueAttr: true,
        yellowAttr: true,
        purpleAttr: true,
        star: [2, 6],
        obtainBy: '',
      },
    }

    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { loading, fkgs } = nextProps
    return { fkgs, loading }
  }

  handleValueChange(key, value) {
    this.setState({ filter: { ...this.state.filter, [key]: value} })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.filter)
    this.setState({ loading: true })
    let filtered = filter(this.props.fkgs, this.state.filter)
    const fkgs = sort(filtered, this.state.filter)
    setTimeout(() => {
      this.setState({ fkgs, loading: false })
    }, 1000);
  }

  render() {
    const { fkgs, loading, filter } = this.state
    const { keyword, ...rest } = filter
    const { fkgNames, renderItem } = this.props

    const renderNav = props => (
      <MediaQuery query="(max-width: 992px)">
        <Nav
          {...props}
          keyword={keyword}
          fkgNames={fkgNames}
          onValueChange={this.handleValueChange}
          onSubmit={this.handleSubmit}
        >
          <Filter
            {...rest}
            onValueChange={this.handleValueChange}
          />
        </Nav>
      </MediaQuery>
    )

    return (
      <React.Fragment>
        <MediaQuery query="(min-width: 992px)">
          <Header
            keyword={keyword}
            fkgNames={fkgNames}
            onValueChange={this.handleValueChange}
            onSubmit={this.handleSubmit}
          />
        </MediaQuery>

        <div className="row" id="wrapper">
          <MediaQuery query="(min-width: 992px)">
            <div className="col-lg-3">
              <Filter
                {...rest}
                onValueChange={this.handleValueChange}
              />
            </div>
          </MediaQuery>

          <div className="col-12 col-lg-9">
            <FKGList
              loading={loading}
              fkgs={fkgs}
              render={fkgs => fkgs.map((fkg) => (
                <BoxItem actionable key={fkg.id}>
                  {renderItem(fkg)}
                </BoxItem>
              ))}
            />
          </div>
        </div>

        <NavBottom render={renderNav} />
      </React.Fragment>
    )
  }
}

export default FilterableList
