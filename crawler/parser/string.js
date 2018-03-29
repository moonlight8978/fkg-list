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

function parsePassiveSkills($, skillsHTML) {
  let basic, evolution, blooming, _evolutionAndBlooming;

  [basic, _evolutionAndBlooming] = findDelimAndSplit(passiveSkillsDelimiters[0], skillsHTML);
  [evolution, blooming] = findDelimAndSplit(passiveSkillsDelimiters[1], _evolutionAndBlooming);

  basic = basic && splitPassiveSkills($, basic);
  evolution = evolution && splitPassiveSkills($, evolution);
  blooming = blooming && splitPassiveSkills($, blooming);

  return { basic, evolution, blooming };
}

function splitPassiveSkills($, skillsHTML) {
  const html = skillsHTML
    .replace(regexDownChar, '')
    .replace(regexBr, '\n')
    .trim();
  const text = encode($, html);
  const skills = text.split('\n\n');

  return skills;
}

function splitActiveSkill($, skillHTML) {
  const [name, triggerRate, description] = skillHTML
    .split(br)
    .map((html) => encode($, html));

  return { name, triggerRate, description };
}

function encode($, html) {
  return $('<div/>').html(html).text().trim();
}

function findDelimAndSplit(pattern, string) {
  if (string == null) {
    return [null, null];
  }

  const match = string.match(pattern);
  if (match) {
    const delimiter = match[0];
    return string.split(delimiter);
  } else {
    return [string, null];
  }
}

module.exports = {
  parseStats,
  parsePassiveSkills,
  splitActiveSkill,
}
