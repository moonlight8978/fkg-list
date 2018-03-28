import React from 'react'

import { SubmitAPI, GirlApi } from '../../api'
import defaultGirl from './default-girl'
import BasicInformation from './basic-information'
import Skills from './skills'
import Stats from './stats'
import './form.scss'
import './button.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      girl: defaultGirl,
      attributes: null,
      nations: null,
      loves: null,
    }

    this.handleGirlChange = this.handleGirlChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    GirlApi.getAttributes().then(attributes => this.setState({ attributes }))
    GirlApi.getNations().then(nations => this.setState({ nations }))
    GirlApi.getLoves().then(loves => this.setState({ loves }))
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
    const { girl, attributes, nations, loves } = this.state

    return (
      <div>
        <h5 className="mb-3">Create new character</h5>

        { attributes && nations && loves &&
          <form
            className="material-form"
            onSubmit={this.handleSubmit}
          >
            <BasicInformation
              {...this.state}
              onGirlChange={this.handleGirlChange}
            />

            <Skills
              girl={girl}
              onGirlChange={this.handleGirlChange}
            />

            <Stats
              girl={girl}
              onGirlChange={this.handleGirlChange}
            />

            <div className="d-flex justify-content-end">
              <button className="md-btn md-btn-raised md-btn-ripple" type="submit">Submit</button>
            </div>
          </form>
        }
      </div>
    )
  }
}

export default Form
