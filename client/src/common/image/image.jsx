import React from 'react'

import placeholder from './placeholder.png'

import './image.css'

const lazyload = window.lazyload

class Image extends React.PureComponent {
  constructor(props) {
    super(props)

    this.imgRef = React.createRef()
  }

  componentDidUpdate() {
    console.log("Update lazyload");
    new lazyload([this.imgRef.current])
  }

  componentDidMount() {
    new lazyload([this.imgRef.current])
  }

  render() {
    const { src, name } = this.props
    return (
      <div className="image_img-placeholder image_ratio-11">
        <img
          className="image_img-thumb lazyload"
          src={placeholder}
          data-src={src}
          ref={this.imgRef}
          alt={name}
        />
      </div>
    )
  }

}

export default Image
