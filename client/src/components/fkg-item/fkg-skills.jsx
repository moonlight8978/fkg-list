import React from 'react'

function FKGSkills({ title, icon, onClick, children }) {
  return (
    <div className="fkg-item_panels">
      <div className="fkg-item_skill-header">
        <div className="fkg-item_panel-toggler" onClick={onClick}>
          <img className="img-fluid" src={icon} alt={title} />
        </div>
        <div className="fkg-item_panel-title">
          {title}
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
