// TODO change data structure Array => Map

class Formatter {
  format(girls) {
    return girls.map((girl) => {
      const formattedGirl = Object.assign({}, girl);
      formattedGirl.totalStats = {
        attack: formattedGirl.originalStats.attack + formattedGirl.bonusStats.attack,
        defense: formattedGirl.originalStats.defense + formattedGirl.bonusStats.defense,
        hitPoint: formattedGirl.originalStats.hitPoint + formattedGirl.bonusStats.hitPoint,
      };
      formattedGirl.allStats = Object.values(formattedGirl.totalStats)
        .reduce((total, currentValue) => total + currentValue, 0);
      return formattedGirl;
    });
  }
}

export default new Formatter();
