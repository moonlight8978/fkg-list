import React from 'react'

import ImgPlaceholder from '../../../common/img-placeholder'
import './girl-item.scss'

class GirlItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: 0,
    }
  }

  changeImage(image) {
    this.setState({ image })
  }

  render() {
    const { girl } = this.props
    console.log(JSON.stringify(girl))

    const imageSrc = girl.images[this.state.image]

    return (
      <div className="girl-item">
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
      </div>
    )
  }
}

export default GirlItem
