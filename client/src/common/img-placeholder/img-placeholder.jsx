import React from 'react'

import './img-placeholder.scss'

function ImgPlaceholder({ src, ratio, alt }) {
  const wrapperClass = `img-placeholder img-placeholder-ratio-${ratio}`

  return (
    <div className={wrapperClass}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default ImgPlaceholder
