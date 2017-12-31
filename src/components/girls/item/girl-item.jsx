import React from 'react';

import './girl-item.scss';
import { GirlApi } from './../../../api';

class GirlItem extends React.Component {
  render() {
    const { girl, attributes } = this.props;

    return (
      <div className="girl-item table-row">
        <div className="girl-basic-info">
          <div className="table-col">
            <img src={girl.images[girl.images.length - 1]} alt={girl.name} />
          </div>

          <div className="table-col">
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
        </div>

        <div className="girl-skills">
          <div className="girl-active-skill">
            <div>
              Skill: {girl.skills.active.name}
            </div>
            <div>
              {girl.skills.active.triggerRate} - {girl.skills.active.description}
            </div>
          </div>

          <div className="girl-passive-skills">
            {girl.skills.passive.map((skill, index) => {
              return <div className="text-pre-wrap" key={index}>{skill}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default GirlItem;
