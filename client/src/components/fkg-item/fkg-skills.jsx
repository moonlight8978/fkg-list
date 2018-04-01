import React from 'react'
import classNames from 'classnames'

import abilityIcon from './images/ability.png'
import skillIcon from './images/skill.png'

const panel = {
  'skill': { 'title': '戦闘スキル', icon: skillIcon },
  'ability': { 'title': 'アビリティ', icon: abilityIcon },
}

function FKGSkills({ type, show, onClick, children }) {
  const containerClass = classNames('fkg-item_panels', { 'active': show })

  return (
    <div className={containerClass}>
      <div className="fkg-item_skill-header">
        <div className="fkg-item_panel-toggler" onClick={onClick}>
          <img className="img-fluid" src={panel[type].icon} alt={panel[type].title} />
        </div>
        <div className="fkg-item_panel-title">
          {panel[type].title}
        </div>
      </div>

      <div className="fkg-item_skill-content">
        <div className="fkg-item_skills-panel">
          {children}
        </div>
      </div>
    </div>
  )
}

export default FKGSkills
