class Formatter {
  format(girls) {
    return girls.map((girl) => {
      const formattedGirl = Object.assign({}, girl);
      formattedGirl.totalStats = {
        attack: formattedGirl.originalStats.attack + formattedGirl.bonusStats.attack,
        defense: formattedGirl.originalStats.defense + formattedGirl.bonusStats.defense,
        hitPoint: formattedGirl.originalStats.hitPoint + formattedGirl.bonusStats.hitPoint,
      };
      return formattedGirl;
    });
  }
}

export default new Formatter();
