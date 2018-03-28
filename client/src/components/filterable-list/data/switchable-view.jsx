import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import classNames from 'classnames'

import ListView from '../list'
import GridView from '../grid'

class SwitchableView extends React.Component {
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

  render() {
    const { girls } = this.props

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
          {this.isListType('list') ? <ListView girls={girls} /> : <GridView girls={girls} />}
        </div>
      </div>
    )
  }
}

export default SwitchableView
