import axios from 'axios'
import attributes from './attributes'
import nations from './nations'
import loves from './loves'
import Formatter from './formatter'

class GirlApi {
  constructor() {
    this.girls = []
  }

  getAttributes() {
    this.attributes = attributes
    return Promise.resolve(this.attributes)
  }

  getLoves() {
    this.loves = loves
    return Promise.resolve(this.loves)
  }

  getNations() {
    this.nations = nations
    return Promise.resolve(this.nations)
  }

  async getGirls() {
    if (!this.isGirlsResolved()) {
      const response = await axios.get('/girls.json')
      this.girls = Formatter.format(response.data)
    }
    return Promise.resolve(this.girls)
  }

  isGirlsResolved() {
    return this.girls.length > 0
  }
}

export default new GirlApi()
