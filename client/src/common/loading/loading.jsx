import React from 'react'

import './loading.scss'

function Loading(Component) {
  return function withLoading({ data, ...rest }) {
    const loading = (
      <div className="box">
        <div className="loading">
          <img src="/double_ring.gif" />
        </div>
      </div>
    )

    return data ? <Component {...rest} /> : loading
  }
}

export default Loading
