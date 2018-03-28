import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import classNames from 'classnames'

import { AddGirlToMyList } from '../../my-list'
import ListItem from './list-item'
import Fade from '../../../common/fade'
import './list-view.scss'

class ListView extends React.Component {
  render() {
    const { girls } = this.props

    const listItems = girls.map(girl => (
      <Fade duration={300} key={girl.id}>
        <ListItem
          girl={girl}
          addItem={AddGirlToMyList.add}
          removeItem={AddGirlToMyList.remove}
        />
      </Fade>
    ))

    return (
      <TransitionGroup className='row'>
        {listItems}
      </TransitionGroup>
    )
  }
}

export default ListView
