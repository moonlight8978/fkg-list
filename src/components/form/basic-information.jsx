import React from 'react'

class BasicInformation extends React.Component {
  constructor(props) {
    super(props)

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.addImage = this.addImage.bind(this)
    this.removeImage = this.removeImage.bind(this)
  }

  handleFieldChange(propName, event) {
    const value = propName === 'stars' ? parseInt(event.target.value, 10) : event.target.value
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

  render() {
    const { girl } = this.props

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
                onChange={event => this.handleFieldChange('id', event)}
              />
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={girl.name}
                onChange={event => this.handleFieldChange('name', event)}
              />
            </div>

            <div className="form-group">
              <label>Stars</label>
              <select
                className="form-control"
                value={girl.stars}
                onChange={event => this.handleFieldChange('stars', event)}
              >
                <option value="" disabled>Please select one...</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
                <option value="6">★★★★★★</option>
              </select>
            </div>

            <div className="form-group">
              <label>Attribute</label>
              <select
                className="form-control"
                value={girl.attribute}
                onChange={event => this.handleFieldChange('attribute', event)}
              >
                <option value="" disabled>Please select one...</option>
                <option value="red">斬</option>
                <option value="blue">打</option>
                <option value="yellow">突</option>
                <option value="purple">魔</option>
              </select>
            </div>

            <div className="form-group">
              <label>Nation</label>
              <select
                className="form-control"
                value={girl.nation}
                onChange={event => this.handleFieldChange('nation', event)}
              >
                <option value="" disabled>Please select one...</option>
                <option value="winter_rose">ウィンターローズ</option>
                <option value="bergamot_valley">ベルガモットバレー</option>
                <option value="banana_ocean">バナナオーシャン</option>
                <option value="blossom_hill">ブロッサムヒル</option>
                <option value="lily_wood">リリィウッド</option>
              </select>
            </div>

            <div className="form-group">
              <label>Love</label>
              <select
                className="form-control"
                value={girl.love}
                onChange={event => this.handleFieldChange('love', event)}
              >
                <option value="" disabled>Please select one...</option>
                <option value="book">本</option>
                <option value="cake">ケーキ</option>
                <option value="doll">ぬいぐるみ</option>
                <option value="gemstone">宝石</option>
              </select>
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <label>Obtain by</label>
              <input
                type="text"
                className="form-control"
                value={girl.obtainBy}
                onChange={event => this.handleFieldChange('obtainBy', event)}
              />
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
