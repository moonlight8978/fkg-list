import React from 'react'

import actionable from './actionable'
import Image from '../../common/image'
import FKGStat from './fkg-stat'
import FKGSkills from './fkg-skills'

import purpleIcon from './images/purple.png'
import yellowIcon from './images/yellow.png'
import redIcon from './images/red.png'
import blueIcon from './images/blue.png'

import './fkg-item.css'

const icon = {
  blue: blueIcon,
  red: redIcon,
  yellow: yellowIcon,
  purple: purpleIcon,
}

class FKGItem extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      skillPanel: 0,
    }

    this.changeImage = this.changeImage.bind(this)
    this.toggleSkillPanel = this.toggleSkillPanel.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { imageIndex: nextProps.fkg.images.length - 1 }
  }

  changeImage(event) {
    const max = this.props.fkg.images.length - 1
    let next = this.state.imageIndex + 1
    next = next > max ? 0 : next
    console.log(next, max);
    this.setState({ imageIndex: next })
  }

  toggleSkillPanel(event) {
    this.setState({
      skillPanel: this.state.skillPanel ? 0 : 1
    }, () => {
      console.log('Toggled');
      console.log(this.state);
    })
  }

  render() {
    const { fkg } = this.props
    const { imageIndex, skillPanel } = this.state
    const attributeIcon = icon[fkg.attribute]

    return (
      <div className="fkg-item">
        <div className="fkg-item_main-info-col">
          <div className="fkg-item_img-col">
            <div onClick={this.changeImage}>
              <Image src={fkg.images[imageIndex]} name={fkg.name} />
            </div>
            <div className="fkg-item_total-stats">{fkg.stats.total || '???'}</div>
          </div>

          <div className="fkg-item_info-col">
            <div className="fkg-item_info-header">
              <div className="fkg-item_attribute">
                <Image src={attributeIcon} name={fkg.raw.attribute} />
              </div>

              <div className="fkg-item_name">
                <strong>{fkg.name}</strong>
                <br />
                [バーション]
              </div>
            </div>

            <div className="fkg-item_stats-group">
              <FKGStat property="hp">
                {fkg.stats.hitPoint || '???'}
              </FKGStat>

              <FKGStat property="attack">
                {fkg.stats.attack || '???'}
              </FKGStat>

              <FKGStat property="defense">
                {fkg.stats.defense || '???'}
              </FKGStat>

              <FKGStat property="speed">
                {fkg.stats.speed || '???'}
              </FKGStat>
            </div>
          </div>
        </div>

        <div className="fkg-item_skills-col">
          <FKGSkills type="skill" show={skillPanel === 0} onClick={this.toggleSkillPanel}>
            {fkg.skills.active.name}
            <br />
            {fkg.skills.active.triggerRate}
            <br />
            {fkg.skills.active.description}
          </FKGSkills>

          <FKGSkills type="ability" show={skillPanel === 1} onClick={this.toggleSkillPanel}>
            <ol style={{ margin: 0, paddingLeft: '20px' }}>
              {fkg.skills.passive && fkg.skills.passive.map((ability, index) => (
                <li className="fkg-item-ability" key={index}>{ability}</li>
              ))}
            </ol>
          </FKGSkills>
        </div>
      </div>
    )
  }
}

const RemoveableFKGItem = actionable(FKGItem, 'remove')
const AddableFKGItem = actionable(FKGItem, 'add')

export {
  AddableFKGItem,
  RemoveableFKGItem,
}
