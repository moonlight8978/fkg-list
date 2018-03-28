const Immutable = require('immutable')

let template = {
  "id": "",
  "name": "",
  "stars": 0,
  "nation": "",
  "love": "",
  "obtainBy": "",
  "attribute": "",
  "images": [], // Array<String>
  "originalStats": {
    "hitPoint": 0,
    "attack": 0,
    "defense": 0,
    "speed": 0,
  },
  "bonusStats": {
    "hitPoint": 0,
    "attack": 0,
    "defense": 0,
  },
  "skills": {
    "active": {
      "name": "",
      "triggerRate": "",
      "description": "",
    },
    "passive": [], // Array<String>
  },
}

// template = Immutable.fromJS(template)

// console.log(template)


module.exports = {
  template: template
}
