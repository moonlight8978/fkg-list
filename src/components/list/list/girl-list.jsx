import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import classNames from 'classnames'

import { AddGirlToMyList } from '../../my-list'
import GirlItem from '../item'
import GirlGridItem from '../item-grid'
import Fade from '../../../common/fade'
import './girl-list.scss'

class GirlList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listType: 'list',
    }

    this.chooseListType = this.chooseListType.bind(this)
    this.isListType = this.isListType.bind(this)
  }

  chooseListType(listType) {
    this.setState({ listType })
  }

  isListType(listType) {
    return listType === this.state.listType
  }

  renderGirls() {
    const { girls, ...constants } = this.props

    return girls.map((girl, index) => {
      const props = {
        girl,
        ...constants,
        addItem: AddGirlToMyList.add,
        removeItem: AddGirlToMyList.remove,
      }

      const item = this.isListType('grid')
        ? <GirlGridItem {...props} />
        : <GirlItem {...props} />

      return (
        <Fade duration={300} key={girl.id}>
          {item}
        </Fade>
      )
    })
  }

  render() {
    const girlItems = this.renderGirls(this.state.listType)

    return (
      <div>
        <div>
          <div className="icon-group mb-3">
            <div
              className={classNames(
                'icon-item',
                { 'active': this.isListType('list') }
              )}
              onClick={event => this.chooseListType('list')}
            >
              <i className="fa fa-list"></i>
            </div>

            <div
              className={classNames(
                'icon-item',
                { 'active': this.isListType('grid') }
              )}
              onClick={event => this.chooseListType('grid')}
            >
              <i className="fa fa-th-large"></i>
            </div>
          </div>
        </div>

        <div className={
          classNames(
            "girl-list",
            { "grid-wrapper-fix": this.isListType('grid') },
            { "box": this.isListType('list') }
          )
        }>
          <TransitionGroup className='row'>
            {girlItems}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default GirlList
