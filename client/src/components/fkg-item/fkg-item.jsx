import React from 'react'

import Image from '../../common/image'
import FKGStat from './fkg-stat'
import FKGSkills from './fkg-skills'

import './fkg-item.css'

class FKGItem extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      skillPanel: 1,
    }

    this.changeImage = this.changeImage.bind(this)
    this.toggleSkillPanel = this.toggleSkillPanel.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
	if (state.imageIndex !== undefined) {
		return null
	}
    return { imageIndex: props.fkg.images.length - 1 }
  }

  changeImage(event) {
    const max = this.props.fkg.images.length - 1
    const next = (this.state.imageIndex + 1) > max ? 0 : (this.state.imageIndex + 1)
    this.setState({ imageIndex: next })
  }

  toggleSkillPanel(event) {
    this.setState({ skillPanel: this.state.skillPanel ? 0 : 1 })
  }

  render() {
    const { fkg, renderDropdown } = this.props
    const { imageIndex, skillPanel } = this.state

    const imageSrc = `assets/images/${fkg.id}_${imageIndex}`

    return (
      <div className="actionable_dropdown dropdown">
        <div>
          <div className="fkg-item">
            <div className="fkg-item_main-info-col">
              <div className="fkg-item_img-col">
                <div onClick={this.changeImage}>
                  <Image src={imageSrc} name={fkg.name} />
                  {/* <Image src={fkg.images[imageIndex]} name={fkg.name} /> */}
                </div>
                <div className="fkg-item_total-stats">{fkg.stats.total || '???'}</div>
              </div>

              <div className="fkg-item_info-col">
                <div className="fkg-item_info-header">
                  <div className="fkg-item_attribute">
                    {/* TODO fix raw attribute */}
                    <Image src={`assets/${fkg.attribute}.png`} name={"RawAttribute"} />
                  </div>

                  <div className="fkg-item_name">
                    <strong>{fkg.name}</strong>
                    <br />
                    [バーション]
                  </div>
                </div>

                <div className="fkg-item_stats-group">
                  <FKGStat property="hp">
                    {fkg.stats.hp || '???'}
                  </FKGStat>

                  <FKGStat property="attack">
                    {fkg.stats.attack || '???'}
                  </FKGStat>

                  <FKGStat property="speed">
                    {fkg.speed || '???'}
                  </FKGStat>

                  <FKGStat property="defense">
                    {fkg.stats.defense || '???'}
                  </FKGStat>
                </div>
              </div>
            </div>

            <div className="fkg-item_skills-col">
              {skillPanel === 1 ? (
                <FKGSkills
                  title="戦闘スキル"
                  icon="assets/skill.png"
                  onClick={this.toggleSkillPanel}
                >
                  {fkg.skill.name}
                  <br />
                  {fkg.skill.triggerRate}
                  <br />
                  {fkg.skill.description}
                </FKGSkills>
              ) : (
                <FKGSkills
                  title="アビリティ"
                  icon="assets/ability.png"
                  onClick={this.toggleSkillPanel}
                >
                  <ol style={{ margin: 0, paddingLeft: '20px' }}>
                    {fkg.abilities && fkg.abilities.map((ability, index) => (
                      <li className="fkg-item-ability" key={index}>{ability}</li>
                    ))}
                  </ol>
                </FKGSkills>
              )}
            </div>
          </div>
        </div>

        <button className="dropdown-toggle" data-toggle="dropdown" type="button"></button>

        <div className="dropdown-menu dropdown-menu-right">
          {renderDropdown()}
        </div>
      </div>
    )
  }
}

export default FKGItem
