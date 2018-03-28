import React from 'react'

import { Select } from '../../../common/form'

class BasicInformation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      obtainByGacha: false,
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.addImage = this.addImage.bind(this)
    this.removeImage = this.removeImage.bind(this)
    this.handleObtainByGachaChange = this.handleObtainByGachaChange.bind(this)
  }

  handleFieldChange(propName, value) {
    const newGirl = Object.assign({}, this.props.girl, { [`${propName}`]: value })
    this.props.onGirlChange(newGirl)
  }

  handleImageChange(index, event) {
    let images = this.props.girl.images.slice()
    images[index] = event.target.value
    const newGirl = Object.assign({}, this.props.girl, { images })
    this.props.onGirlChange(newGirl)
  }

  addImage(event) {
    event.preventDefault()
    if (this.props.girl.images.length < 3) {
      let images = this.props.girl.images.slice()
      images.push("")
      const newGirl = Object.assign({}, this.props.girl, { images })
      this.props.onGirlChange(newGirl)
    }
  }

  removeImage(index, event) {
    event.preventDefault()
    if (this.props.girl.images.length > 1) {
      let images = [...this.props.girl.images]
      images.splice(index, 1)
      const newGirl = Object.assign({}, this.props.girl, { images })
      this.props.onGirlChange(newGirl)
    }
  }

  handleObtainByGachaChange(event) {
    this.setState({ obtainByGacha: event.target.checked }, () => {
      const value = this.state.obtainByGacha ? "プレミアムガチャ" : ""
      this.handleFieldChange("obtainBy", value)
    })
  }

  render() {
    const { girl, attributes, nations, loves } = this.props

    return (
      <div>
        <h6>Basic information</h6>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>ID</label>
              <input
                type="text"
                className="form-control"
                value={girl.id}
                onChange={event => this.handleFieldChange('id', event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={girl.name}
                onChange={event => this.handleFieldChange('name', event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Stars</label>
              <select
                className="form-control"
                value={girl.stars}
                onChange={event => this.handleFieldChange('stars', parseInt(event.target.value, 10))}
              >
                <option value="" disabled>Please select one...</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
                <option value="6">★★★★★★</option>
              </select>
            </div>

            <Select
              name="Attribute"
              value={girl.nation}
              onChange={event => this.handleFieldChange('nation', event.target.value)}
              optionsMap={attributes}
            />

            <Select
              name="Nation"
              value={girl.attribute}
              onChange={event => this.handleFieldChange('attribute', event.target.value)}
              optionsMap={nations}
            />

            <Select
              name="Love"
              value={girl.love}
              onChange={event => this.handleFieldChange('love', event.target.value)}
              optionsMap={loves}
            />
          </div>

          <div className="col-6">
            <div className="form-group">
              <label>Obtain by</label>
              <input
                type="text"
                className="form-control"
                value={girl.obtainBy}
                onChange={event => this.handleFieldChange('obtainBy', event.target.value)}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={this.state.obtainByGacha}
                onChange={this.handleObtainByGachaChange}
              />
              <label>Obtain by gacha</label>
            </div>
            <div className="form-group">
              <label>Images</label>
              <div>
                {
                  girl.images.map((image, i) => {
                    return (
                      <div key={i}>
                        <input
                          type="text"
                          className="form-control mb-3 form-control-removeable"
                          value={image}
                          onChange={event => this.handleImageChange(i, event)}
                        />
                        <button
                          type="button"
                          onClick={event => this.removeImage(i, event)}
                        >
                          -
                        </button>
                      </div>
                    )
                  })
                }
                <button
                  className="md-btn md-btn-raised md-btn-ripple"
                  type="button"
                  onClick={this.addImage}
                >
                  Add image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BasicInformation
