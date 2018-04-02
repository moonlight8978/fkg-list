import React from 'react'

import './actionable.css'

function actionable(FKGItem, type) {
  return function({ onAction, fkg }) {
    return (
      <div className="actionable_dropdown dropdown">
        <FKGItem fkg={fkg} />

        <button className="dropdown-toggle" data-toggle="dropdown" type="button"></button>
        <Dropdown onAction={onAction} fkg={fkg}>
          {context(type, fkg)}
        </Dropdown>
      </div>
    )
  }
}

function Dropdown({ onAction, fkg, children }) {
  return (
    <div className="dropdown-menu dropdown-menu-right">
      <button type="button" className="dropdown-item" onClick={() => onAction(fkg)} >
        {children}
      </button>
    </div>
  )
}

function context(type, fkg) {
  if (type === 'add') {
    return `Add ${fkg.name} to MyList`
  } else {
    return `Remove ${fkg.name} from MyList`
  }
}

export default actionable
