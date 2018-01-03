import React from 'react';

import './girl-item.scss';

class GirlItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      image: 0,
    };
  }

  changeImage(image) {
    this.setState({ image });
  }

  render() {
    const { girl, attributes } = this.props;

    const imageSrc = girl.images[this.state.image];

    return (
      <div className="girl-item">
        <div className="row">
          <div className="girl-basic-info col-md-6 col-lg-5 col-xl-4 item-col">
            <div className="item-col girl-img">
              <img src={imageSrc} alt={girl.name} />
              <div>
                {girl.allStats}
              </div>
            </div>

            <div className="item-col girl-stats">
              <div>
                ID{girl.id}.
                ({attributes.get(girl.attribute)})
                {girl.name}
              </div>

              <div className="girl-stats-group">
                <div className="girl-stats-item">
                  <div>{girl.totalStats.hitPoint}</div>
                  <div>
                    {girl.originalStats.hitPoint}<br />
                    +{girl.bonusStats.hitPoint}
                  </div>
                </div>

                <div className="girl-stats-item">
                  <div>{girl.totalStats.attack}</div>
                  <div>
                    {girl.originalStats.attack}<br />
                    +{girl.bonusStats.attack}
                  </div>
                </div>

                <div className="girl-stats-item">
                  <div>{girl.totalStats.defense}</div>
                  <div>
                    {girl.originalStats.defense}<br />
                    +{girl.bonusStats.defense}
                  </div>
                </div>

                <div className="girl-stats-item">
                  {girl.originalStats.speed}
                </div>
              </div>
            </div>

            <div className="girl-active-skill item-col">
              <div>
                戦闘スキル: {girl.skills.active.name}
              </div>
              <div>
                {girl.skills.active.triggerRate}<br />
                {girl.skills.active.description}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-7 col-xl-8 girl-skills item-col">
            <h6>アビリティ</h6>
            <div className="girl-passive-skills">
              {girl.skills.passive.map((skill, index) => {
                return <div className="text-pre-wrap" key={index}>{skill}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GirlItem;
