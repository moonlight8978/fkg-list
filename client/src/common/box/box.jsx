import React from 'react';
import classNames from 'classnames';

import './box.css';

function Box({ hasItems, children }) {
  const boxClassNames = classNames('box', { 'has-items': hasItems })

  return (
    <div className={boxClassNames}>
      {children}
    </div>
  );
}

export default Box;
