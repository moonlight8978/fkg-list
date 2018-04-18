import React from 'react'

function FKGStat({ property, children }) {
  const wrapperClass = `fkg-item_stat fkg-item_${property}`

  return (
    <div className={wrapperClass}>
      <div>
        {children}
      </div>
    </div>
  )
}

export default FKGStat
