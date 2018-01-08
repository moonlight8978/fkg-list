import React from 'react'

import { GirlApi } from '../../api'
import AddGirlToMyList from './add-girl-to-my-list'
import FilterableListContainer from '../list'

class MyList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      attributes: null,
      girls: AddGirlToMyList.getGirls(),
      nations: null,
      loves: null,
    }
  }

  componentDidMount() {
    GirlApi.getAttributes().then(attributes => this.setState({ attributes }))
    GirlApi.getNations().then(nations => this.setState({ nations }))
    GirlApi.getLoves().then(loves => this.setState({ loves }))
  }

  render() {
    return <FilterableListContainer {...this.state} />
  }
}

export default MyList
