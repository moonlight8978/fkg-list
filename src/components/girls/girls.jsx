import React from 'react'

import { GirlApi } from '../../api'
import FilterableListContainer from './filterable-list'

class Girls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      attributes: null,
      girls: null,
      nations: null,
      loves: null,
    }
  }

  componentDidMount() {
    this.delay = setTimeout(() => {
      GirlApi.getAttributes().then(attributes => this.setState({ attributes }))
      GirlApi.getNations().then(nations => this.setState({ nations }))
      GirlApi.getLoves().then(loves => this.setState({ loves }))
      GirlApi.getGirls().then(girls => this.setState({ girls }))
    }, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.delay)
  }

  render() {
    return <FilterableListContainer {...this.state} />
  }
}

export default Girls
