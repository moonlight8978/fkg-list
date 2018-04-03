import React from 'react'

import withLoading from '../common/loading'
import { Box, BoxItem } from '../common/box'
import loadingGif from './loading.gif'

class FKGList extends React.Component {
  state = {
    page: 1,
  }

  increasePage() {
    this.setState({ page: this.state.page + 1 })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.page !== nextState.page) {
      return true
    }

    const fkgs = this.props.fkgs
    const nextFKGs = nextProps.fkgs
    if (fkgs.length !== nextFKGs.length) {
      return true
    }

    const len = fkgs.length
    for (let i = 0; i < len; i += 1) {
      if (fkgs[i].id !== nextFKGs[i].id) {
        return true
      }
    }

    return false
  }

  render() {
    console.log("list was rendered")
    const perPage = 20
    const { fkgs, ListItem, onAction } = this.props
    const { page } = this.state
    const end = page * perPage - 1
    const lastPage = Math.ceil(fkgs.length / perPage)

    const paginatedFKGs = fkgs.slice(0, end)
    console.log(end, lastPage, paginatedFKGs);

    return (
      <Box hasItems>
        {paginatedFKGs.map((fkg) =>
          <BoxItem actionable key={fkg.id}>
            <ListItem
              fkg={fkg}
              onAction={onAction}
            />
          </BoxItem>
        )}
        {(page !== lastPage) && (
          <BoxItem key="loading">
            <button className="show-more btn" onClick={this.increasePage.bind(this)}>
              <img className="img-fluid" src={loadingGif} alt="loading"/>
              <span>Show more</span>
            </button>
          </BoxItem>
        )}
      </Box>
    )
  }
}

export default withLoading(FKGList)
