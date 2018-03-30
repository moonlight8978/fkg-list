import React from 'react';

function removeable(Component, onRemove) {
  return function(props) {
    return (
      <div>
        <Component {...props} />
        <div onClick={() => onRemove(props.fkg)} >With options</div>
      </div>
    );
  };
}

export default removeable;
