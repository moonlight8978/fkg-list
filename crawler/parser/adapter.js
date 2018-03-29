const { attributes, loves, nations } = require('./const');

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

    this.skills = {
      passive: raw.passiveSkills.blooming,
      active: raw.activeSkill,
    };

    this.stats = {
      hitPoint: this.calculateStats(raw.hitPoint.maxLevel[2], raw.hitPoint.bonus[2]),
      attack: this.calculateStats(raw.attack.maxLevel[2], raw.attack.bonus[2]),
      defense: this.calculateStats(raw.defense.maxLevel[2], raw.defense.bonus[2]),
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
    return this.stats.hitPoint + this.stats.attack + this.stats.defense;
  }
}

module.exports.FKGAdapter = FKGAdapter;
