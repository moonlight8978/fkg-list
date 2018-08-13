const Unit = {
  initialize(attributes = {}) {
    let unit = {
      id: 0,
      name: '',
      version: 'ノーマル',
      abilities: [],
      attribute: '',
      images: [],
      love: '',
      nation: '',
      obtainBy: '',
      skill: {
        name: '',
        triggerRate: '',
        description: '',
      },
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        total: 0,
      },
      speed: 0
    }

    Object.entries(attributes).forEach(([attribute, value]) => {
      Object.assign(unit, {}, { [attribute]: value})
    })

    return unit
  },

  findById(id, units) {
    return units.find(unit => unit.id === id)
  }
}

module.exports = Unit
