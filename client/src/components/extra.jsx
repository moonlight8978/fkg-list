import React from 'react'

import { MyListApi } from '../api'
import { Box, BoxItem } from '../common/box'
import download from '../utils/download'
import Layout from '../layout/layout'

class Extra extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      importFile: null,
    }

    this.handleImportFileChange = this.handleImportFileChange.bind(this)
    this.export = this.export.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleImportFileChange(event) {
    console.log(event.target.files);
    this.setState({ importFile: event.target.files[0] })
  }

  export(event) {
    const { url, fileName } = MyListApi.export()
    download(url, fileName)
  }

  handleSubmit(event) {
    event.preventDefault()
    MyListApi.import(this.state.importFile)
      .then((file) => console.log(file))
  }

  render() {
    const { importFile } = this.state
    const importFileName = importFile ? importFile.name : 'Choose file'

    return (
      <Layout>
        <Box hasItems>
          <BoxItem>
            <h6>
              Import MyList
            </h6>

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    onChange={this.handleImportFileChange}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="customFileLang"
                  >
                    {importFileName}
                  </label>
                </div>
              </div>

              <button className="btn btn-primary">Import</button>
            </form>
          </BoxItem>

          <BoxItem>
            <h6>
              Export MyList
            </h6>

            <button
              onClick={this.export}
              className="btn btn-primary"
            >
              Export
            </button>
          </BoxItem>
        </Box>
      </Layout>
    )
  }
}

export default Extra
