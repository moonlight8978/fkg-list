import React from 'react'

class Skills extends React.Component {
  constructor(props) {
    super(props)

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handlePassiveChange = this.handlePassiveChange.bind(this)
    this.addPassive = this.addPassive.bind(this)
    this.removePassive = this.removePassive.bind(this)
  }

  handleFieldChange(property, event) {
    let keys = property.split('.')
    const lastKey = keys.pop()
    let newGirl = JSON.parse(JSON.stringify(this.props.girl))
    let currentRef = newGirl
    keys.forEach(key => {
      currentRef = currentRef[key]
    })
    currentRef[lastKey] = event.target.value
    this.props.onGirlChange(newGirl)
  }

  handlePassiveChange(index, event) {
    let passiveSkills = [...this.props.girl.skills.passive]
    passiveSkills[index] = event.target.value
    const newGirl = Object.assign(
      {}, this.props.girl,
      {
        skills: {
          ...this.props.girl.skills,
          passive: passiveSkills
        }
      }
    )
    this.props.onGirlChange(newGirl)
  }

  addPassive(event) {
    if (this.props.girl.skills.passive.length < 4) {
      const passiveSkills = [...this.props.girl.skills.passive, '']
      const newGirl = Object.assign(
        {}, this.props.girl,
        {
          skills: {
            ...this.props.girl.skills,
            passive: passiveSkills
          }
        }
      )
      this.props.onGirlChange(newGirl)
    }
  }

  removePassive(index, event) {
    event.preventDefault()
    if (this.props.girl.skills.passive.length > 3) {
      let passiveSkills = [...this.props.girl.skills.passive]
      passiveSkills.splice(index, 1)
      const newGirl = Object.assign(
        {}, this.props.girl,
        {
          skills: {
            ...this.props.girl.skills,
            passive: passiveSkills
          }
        }
      )
      this.props.onGirlChange(newGirl)
    }
  }

  render() {
    const { girl } = this.props

    return (
      <div>
        <h6>Skills</h6>
        <div className="row">
          <div className="col-6">
            <h6>Active</h6>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={girl.skills.active.name}
                onChange={event => this.handleFieldChange('skills.active.name', event)}
              />
            </div>
            <div className="form-group">
              <label>Trigger rate</label>
              <input
                type="text"
                className="form-control"
                value={girl.skills.active.triggerRate}
                onChange={event => this.handleFieldChange('skills.active.triggerRate', event)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                value={girl.skills.active.description}
                onChange={event => this.handleFieldChange('skills.active.description', event)}
              />
            </div>
          </div>

          <div className="col-6">
            <h6>Passive</h6>
            {
              girl.skills.passive.map((skill, i) => (
                <div key={i}>
                  <textarea
                    className="form-control mb-3 form-control-removeable"
                    value={skill}
                    onChange={event => this.handlePassiveChange(i, event)}
                  >
                  </textarea>
                  <button
                    type="button"
                    onClick={event => this.removePassive(i, event)}
                  >
                    -
                  </button>
                </div>
              ))
            }
            <button
              className="md-btn md-btn-raised md-btn-ripple"
              type="button"
              onClick={this.addPassive}
            >
              Add passive skills
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
