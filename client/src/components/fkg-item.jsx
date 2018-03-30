import React from 'react';

function FKGItem({ fkg }) {
  return (
    <div>
      {/* <span><img src={fkg.images[fkg.images.length - 1]} /></span> */}
      <span>{fkg.id}</span>
      <span>{fkg.name}</span>
      <span>{fkg.attribute}</span>
      <span>{fkg.nation}</span>
      <span>{fkg.stats.total}</span>
      <span>{fkg.skills.active.name}</span>
      <span>{fkg.skills.passive && fkg.skills.passive.length}</span>
    </div>
  );
}

export default FKGItem;
