import React from 'react'
import { TransitionGroup } from 'react-transition-group'

import GirlItem from '../item'
import Fade from '../../../common/fade'
import './girl-list.scss'

class GirlList extends React.Component {
  renderGirls() {
    const { girls, attributes } = this.props

    return girls.map((girl, index) => {
      return (
        <Fade duration={300} key={girl.id}>
          <GirlItem girl={girl} attributes={attributes} />
        </Fade>
      )
    })
  }

  render() {
    const girlItems = this.renderGirls()

    return (
      <div className="girl-list">
        <TransitionGroup>
          {girlItems}
        </TransitionGroup>
      </div>
    )
  }
}

export default GirlList
