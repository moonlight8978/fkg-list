import React from 'react';

import loading from './loading.gif';

function withLoading(FKGList) {
  return function(props) {
    if (props.fkgs) {
      return <FKGList {...props} />;
    } else {
      return (
        <div className="Loading_loading-container">
          <img src={loading} alt="Loading" />
        </div>
      );
    }
  };
}

export default withLoading;
