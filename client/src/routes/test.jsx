import React from 'react'

import Layout from '../layout/layout'
import { Checkbox, AutoComplete } from '../common/form'

function onChange(value) {
  console.log(value);
}

export default class Test extends React.Component {
  state = {
    source: [
      "Johnson Baby",
      "Johnson Baby",
      "Johnson Baby",
    ]
  }

  render() {
    return (
      <Layout>
        <div className="page-content container">
          <AutoComplete
            source={this.state.source}
            onChange={onChange}
          />
          <div className="checkbox-group">
            <Checkbox onChange={onChange}>
              Red
            </Checkbox>

            <Checkbox onChange={onChange}>
              White
            </Checkbox>
          </div>

          <button className="btn btn-primary" type="button">
            Button
          </button>

        </div>
      </Layout>
    )
  }
}
