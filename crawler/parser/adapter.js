const { attributes, loves, nations } = require('./const');

if (!Array.prototype.last) {
  Array.prototype.last = function() {
    return this[this.length - 1]
  }
}

// Create new object from raw data
// Raw sample data can be found in `sample.js`
class FKGAdapter {
  constructor(raw) {
    this.id = parseInt(raw.id);

    this.name = raw.name;

    this.star = raw.star;

    this.images = raw.images;

    this.attribute = attributes.get(raw.attribute);

    this.nation = nations.get(raw.nation);

    this.love = loves.get(raw.love);

    this.obtainBy = raw.obtainBy;

    this.skill = raw.skill

    this.abilities = raw.abilities.blooming

    this.stats = {
      hp: this.calculateStats(raw.hp.maxLevel.last(), raw.hp.bonus.last()),
      attack: this.calculateStats(raw.attack.maxLevel.last(), raw.attack.bonus.last()),
      defense: this.calculateStats(raw.defense.maxLevel.last(), raw.defense.bonus.last()),
      speed: parseInt(raw.speed),
    };
    this.stats.total = this.totalStats();

    this.raw = {
      attribute: raw.attribute,
      nation: raw.nation,
      love: raw.love,
    };
  }

  calculateStats(basic, bonus) {
    return parseInt(basic) + parseInt(bonus);
  }

  totalStats() {
    return this.stats.hp + this.stats.attack + this.stats.defense;
  }
}

module.exports = FKGAdapter;
