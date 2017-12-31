import girls from './girls';
import attributes from './attributes';
import Formatter from './formatter';

class GirlApi {
  constructor() {
    this.girls = [];
  }

  getAttributes() {
    this.attributes = attributes;
    return Promise.resolve(this.attributes);
  }

  getGirls() {
    if (!this.isGirlsResolved()) {
      this.girls = Formatter.format(girls);
    }
    return Promise.resolve(this.girls);
  }

  isGirlsResolved() {
    return this.girls.length > 0;
  }
}

export default new GirlApi();
