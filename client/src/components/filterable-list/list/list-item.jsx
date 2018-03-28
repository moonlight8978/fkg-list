import React from 'react'
import classNames from 'classnames'

import ImgPlaceholder from '../../../common/img-placeholder'
import './list-item.scss'
import '../girl.scss' 

class ListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: 0,
      showOptions: false,
    }

    this.toggleShowOptions = this.toggleShowOptions.bind(this)
  }

  changeImage(image) {
    this.setState({ image })
  }

  toggleShowOptions(event) {
    this.setState({ showOptions: !this.state.showOptions })
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
      <div className="col-12">
        <div className="girl-item girl" onClick={this.toggleShowOptions}>
          <div className="row">
            <div className="girl-basic-info col-md-6 col-lg-5 col-xl-4 item-col">
              <div className="item-col girl-img">
                <ImgPlaceholder src={imageSrc} alt={girl.name} ratio="1_1" />
                <div className="tag bg-pink mt-2">
                  {girl.allStats}
                </div>
              </div>

              <div className="item-col girl-stats">
                <div>
                  No.{girl.id} {girl.name}
                </div>

                <div className="girl-stats-group">
                  <div className="girl-stats-item">
                    <div className="total-stats tag bg-yellow">{girl.totalStats.hitPoint}</div>
                    <div className="basic-stats">
                      {girl.originalStats.hitPoint}<br />
                      +{girl.bonusStats.hitPoint}
                    </div>
                  </div>

                  <div className="girl-stats-item">
                    <div className="total-stats tag bg-red">{girl.totalStats.attack}</div>
                    <div className="basic-stats">
                      {girl.originalStats.attack}<br />
                      +{girl.bonusStats.attack}
                    </div>
                  </div>

                  <div className="girl-stats-item">
                    <div className="total-stats tag bg-blue">{girl.totalStats.defense}</div>
                    <div className="basic-stats">
                      {girl.originalStats.defense}<br />
                      +{girl.bonusStats.defense}
                    </div>
                  </div>

                  <div className="girl-stats-item">
                    <div className="total-stats tag bg-green">{girl.originalStats.speed}</div>
                  </div>
                </div>
              </div>

              <div className="girl-active-skill item-col mt-2">
                <div>
                  <strong>{girl.skills.active.name}</strong>
                </div>
                <div>
                  {girl.skills.active.triggerRate}<br />
                  {girl.skills.active.description}
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-7 col-xl-8 girl-skills item-col mt-3 mt-md-0">
              <h6><strong>アビリティ</strong></h6>
              <div className="girl-passive-skills">
                {girl.skills.passive.map((skill, index) => {
                  return <div className="text-pre-wrap passive-skill" key={index}>{skill}</div>
                })}
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

export default ListItem
