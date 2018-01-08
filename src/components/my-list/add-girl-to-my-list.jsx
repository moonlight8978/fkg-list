class AddGirlToMyList {
  constructor() {
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
  }

  getGirls() {
    let girls = JSON.parse(localStorage.getItem("girls"))
    girls = girls || []
    return girls
  }

  setGirls(girls) {
    localStorage.setItem("girls", JSON.stringify(girls))
  }

  findGirl(girls, compareGirl) {
    return girls.findIndex(girl => girl.id === compareGirl.id)
  }

  add(girl) {
    let girls = this.getGirls()
    if (this.findGirl(girls, girl) === -1) {
      girls.push(girl)
      this.setGirls(girls)
    }
    console.log(this.getGirls())
  }

  remove(girl) {
    let girls = this.getGirls()
    if (this.findGirl(girls, girl) >= 0) {
      girls.splice(girls.indexOf(girl), 1)
      this.setGirls(girls)
    }
  }
}

export default new AddGirlToMyList()
