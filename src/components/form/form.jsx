import React from 'react'

import { SubmitAPI } from '../../api'
import defaultGirl from './const'
import BasicInformation from './basic-information'
import Skills from './skills'
import Stats from './stats'
import './form.scss'
import './button.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      girl: defaultGirl
    }

    this.handleGirlChange = this.handleGirlChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleGirlChange(girl) {
    this.setState({ girl })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ girl: defaultGirl })
    SubmitAPI.submit(JSON.stringify(this.state.girl))
      .then(response => {
        console.log("OK")
        this.setState({ girl: defaultGirl })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h5 className="mb-3">Create new character</h5>

        <form
          className="material-form"
          onSubmit={this.handleSubmit}
        >
          <BasicInformation
            {...this.state}
            onGirlChange={this.handleGirlChange}
          />

          <Skills
            {...this.state}
            onGirlChange={this.handleGirlChange}
          />

          <Stats
            {...this.state}
            onGirlChange={this.handleGirlChange}
          />

          <div className="d-flex justify-content-end">
            <button className="md-btn md-btn-raised md-btn-ripple" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
