import React from 'react'

import withLoading from '../../common/loading'
import { Box, BoxItem } from '../../common/box'

import './fkg-item.css'

class FKGList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
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
    const { fkgs, ListItem, onAction } = this.props
    return (
      <Box hasItems>
        {fkgs.map((fkg) =>
          <BoxItem actionable key={fkg.id}>
            <ListItem
              fkg={fkg}
              onAction={onAction}
            />
          </BoxItem>
        )}
      </Box>
    )
  }
}

export default withLoading(FKGList)
