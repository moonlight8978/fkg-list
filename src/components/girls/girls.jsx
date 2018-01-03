import React from 'react'

import { GirlApi } from '../../api'
import FilterableList from './filterable-list'

class Girls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      attributes: null,
      girls: null,
      delay: null,
    }
  }

  componentDidMount() {
    this.setState({
      delay: setTimeout(() => {
        GirlApi.getAttributes().then(attributes => this.setState({ attributes }))
        GirlApi.getGirls().then(girls => this.setState({ girls }))
      }, 1000)
    })
  }

  componentWillUnmount() {
    clearTimeout(this.state.delay)
  }

  render() {
    return <FilterableList {...this.state} />
  }
}

export default Girls
