const br = '<br class="spacer">';

const regexStats = [
  /(?:^|↓)(\d+)(?:\()/g,
  /(?:\()(\d+)(?:\))/g,
  /(?:\+)(\d+)(?:↓|$)/g,
];

const passiveSkillsDelimiters = [
  /\(?(<strong>)?\(?(&#x9032;&#x5316;&#x5F8C;\+)\)?(<\/strong>)?\)?/,
  /\(?(<strong>)?\(?(&#x958B;&#x82B1;&#x5F8C;)\)?(<\/strong>)?\)?/,
];

const regexDownChar = /&#x2193;/g;

const regexBr = /<br class="spacer">/g;

function parseStats($, statsString) {
  let stats = [[], [], []];
  let match;

  regexStats.forEach((regex, index) => {
    while (match = regex.exec(statsString)) {
      stats[index].push(match[1]);
    }
  });

  const [basic, maxLevel, bonus] = stats;
  return { basic, maxLevel, bonus };
}

function parsePassiveSkills($, skillsString) {
  let skills = [];
  let delim, basic, evolution, blooming, _evolutionAndBlooming;

  [basic, _evolutionAndBlooming] = findDelimAndSplit(passiveSkillsDelimiters[0], skillsString);
  [evolution, blooming] = findDelimAndSplit(passiveSkillsDelimiters[1], _evolutionAndBlooming);

  basic = basic && splitPassiveSkills($, basic);
  evolution = evolution && splitPassiveSkills($, evolution);
  blooming = blooming && splitPassiveSkills($, blooming);

  return { basic, evolution, blooming };
}

function splitPassiveSkills($, skillsString) {
  const htmlString = skillsString
    .replace(regexDownChar, '')
    .replace(regexBr, '\n')
    .trim();
  const text = encode($, htmlString);
  const skills = text.split('\n\n');

  return skills;
}

function splitActiveSkill($, skillHtml) {
  const [name, triggerRate, description] = skillHtml
    .split(br)
    .map((htmlString) => encode($, htmlString));

  return { name, triggerRate, description };
}

function encode($, htmlString) {
  return $('<div/>').html(htmlString).text().trim();
}

function findDelimAndSplit(pattern, string) {
  const match = string.match(pattern);
  if (match) {
    const delim = match[0];
    return string.split(delim);
  } else {
    return [string, null];
  }
}

module.exports = {
  parseStats,
  splitPassiveSkills,
  parsePassiveSkills,
  splitActiveSkill,
}
