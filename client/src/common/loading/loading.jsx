import React from 'react'

import loadingGif from './loading.gif'

import './loading.css'

function withLoading(FKGList) {
  return function({ loading, ...rest }) {
    if (!loading) {
      return <FKGList {...rest} />
    } else {
      return (
        <div className="loading_container">
          <img src={loadingGif} alt="Loading" />
        </div>
      )
    }
  }
}

export default withLoading
