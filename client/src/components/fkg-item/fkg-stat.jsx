import React from 'react'

const titles = {
  hp: 'HP',
  attack: '攻撃力',
  defense: '防御力',
  speed: '移動力',
}

function FKGStat({ property, children }) {
  const wrapperClass = `fkg-item_stat fkg-item_${property}`
  const title = titles[property]

  return (
    <div className={wrapperClass}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

export default FKGStat
