import React from 'react';
import classNames from 'classnames';

import './box.css';

function BoxItem({ children, actionable }) {
  const boxItemClassNames = classNames('box-item', { 'box-item-action': actionable })

  return (
    <div className={boxItemClassNames}>
      {children}
    </div>
  );
}

export default BoxItem;
