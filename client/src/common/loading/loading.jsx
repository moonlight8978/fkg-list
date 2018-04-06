import React from 'react'

import './loading.css'

function withLoading(FKGList) {
  return function({ loading, ...rest }) {
    if (!loading) {
      return <FKGList {...rest} />
    } else {
      return (
        <div className="loading_container">
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      )
    }
  }
}

export default withLoading
