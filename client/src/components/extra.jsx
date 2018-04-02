import React from 'react'

import { MyListApi } from '../api'
import download from '../utils/download'

class Extra extends React.PureComponent {
  constructor(props) {
    super(props)

    this.export = this.export.bind(this)
  }

  export(event) {
    const { url, fileName } = MyListApi.export()
    download(url, fileName)
  }

  render() {
    return (
      <div>
        <button onClick={this.export}>
          Download
        </button>
      </div>
    )
  }
}

export default Extra
