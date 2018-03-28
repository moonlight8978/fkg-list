import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import classNames from 'classnames'

import { AddGirlToMyList } from '../../my-list'
import GridItem from './grid-item'
import Fade from '../../../common/fade'

class GridView extends React.Component {
  render() {
    const { girls } = this.props

    const items = girls.map(girl => (
      <Fade duration={300} key={girl.id}>
        <GridItem
          girl={girl}
          addItem={AddGirlToMyList.add}
          removeItem={AddGirlToMyList.remove}
        />
      </Fade>
    ))

    return (
      <TransitionGroup className='row'>
        {items}
      </TransitionGroup>
    )
  }
}

export default GridView
