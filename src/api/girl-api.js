import girls from './girls'
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

  getGirls() {
    if (!this.isGirlsResolved()) {
      this.girls = Formatter.format(girls)
    }
    return Promise.resolve(this.girls)
  }

  isGirlsResolved() {
    return this.girls.length > 0
  }
}

export default new GirlApi()
