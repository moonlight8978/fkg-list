import React from 'react'
import classNames from 'classnames'

import ImgPlaceholder from '../../../common/img-placeholder'
import './grid-item.scss'

class GridItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: 0,
      showOptions: false,
    }

    this.toggleShowOptions = this.toggleShowOptions.bind(this)
  }

  toggleShowOptions(event) {
    this.setState({ showOptions: !this.state.showOptions })
  }

  changeImage(image) {
    this.setState({ image })
  }

  render() {
    const { girl, addItem, removeItem } = this.props
    // const { girl, attributes, nations, loves } = this.props

    const imageSrc = girl.images[this.state.image]

    const girlOptionsClass = classNames(
      'girl-options', 'box',
      { 'active': this.state.showOptions }
    )

    return (
      <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="girl-grid-item box girl" onClick={this.toggleShowOptions}>
          <div className="row">
            <div className="col-4 pr-0">
              <ImgPlaceholder src={imageSrc} alt={girl.name} ratio="1_1" />
              <div className="tag bg-pink mt-2">
                {girl.allStats}
              </div>
            </div>

            <div className="col-8">
              <div>
                No.{girl.id} {girl.name}
              </div>

              <div className="girl-active-skill mt-2">
                <div>
                  <strong>{girl.skills.active.name}</strong>
                </div>
                <div>
                  {girl.skills.active.triggerRate}<br />
                  {girl.skills.active.description}
                </div>
              </div>
            </div>
          </div>

          <div className={girlOptionsClass}>
            <div className="girl-options-item" onClick={event => addItem(girl)}>
              MyListに追加する
            </div>
            <div className="girl-options-item" onClick={event => removeItem(girl)}>
              MyListに削除する
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GridItem
