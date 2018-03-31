import React from 'react'

import actionable from './actionable'
import Image from '../../common/image'

import './fkg-item.css'

function FKGItem({ fkg }) {
  return (
    <React.Fragment>
      <div className="fkg-item_img-col">
        <Image src={fkg.images[fkg.images.length - 1]} name={fkg.name} />
        <div className="fkg-item_total-stats">{fkg.stats.total}</div>
      </div>
      <div className="fkg-item_info-col">
        <div className="fkg-item_name-group">
          <span>No.{fkg.id}</span>
          <br />
          <strong>{fkg.name}</strong>
        </div>

        <div className="fkg-item_stats-group">
          <div>{fkg.stats.hitPoint}</div>
          <div>{fkg.stats.attack}</div>
          <div>{fkg.stats.defense}</div>
          <div>{fkg.stats.speed}</div>
        </div>

        <div className="fkg-item_active-skill">
          {fkg.skills.active.name}
        </div>
      </div>

      <div className="fkg-item_skills-col">
        {fkg.skills.passive && fkg.skills.passive.map((skill, i) => (
          <div key={i}>{skill}</div>
        ))}
      </div>
    </React.Fragment>
  )
}

const RemoveableFKGItem = actionable(FKGItem, 'remove')
const AddableFKGItem = actionable(FKGItem, 'add')

export {
  AddableFKGItem,
  RemoveableFKGItem,
}
