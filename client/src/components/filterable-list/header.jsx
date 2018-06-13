import React from 'react'

import { AutoComplete } from '../../common/form'
import { FKGApi } from '../../api'

class Header extends React.PureComponent {
  state = {
    fkgNames: []
  }

  async componentDidMount() {
    const fkgNames = await FKGApi.getNames()
    this.setState({ fkgNames })
  }

  render() {
    const { keyword, onSubmit, onValueChange } = this.props
    const { fkgNames } = this.state

    return (
      <div className="filterable-list_header">
        <form onSubmit={onSubmit}>
          <AutoComplete
            source={fkgNames}
            value={keyword}
            onChange={(value) => onValueChange('keyword', value)}
            placeholder="Enter keyword..."
          />

          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    )
  }
}

export default Header
