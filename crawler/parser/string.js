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

// Get stats from string xxx(yyy)+zzz↓xxx(yyy)zzz
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

// Split abilities html into grades, each split by appropriate delimiter
function parseAbilities($, skillsHTML) {
  let basic, evolution, blooming, _evolutionAndBlooming;

  [basic, _evolutionAndBlooming] = findDelimAndSplit(passiveSkillsDelimiters[0], skillsHTML);
  [evolution, blooming] = findDelimAndSplit(passiveSkillsDelimiters[1], _evolutionAndBlooming);

  basic = basic && splitAbilities($, basic);
  evolution = evolution && splitAbilities($, evolution);
  blooming = blooming && splitAbilities($, blooming);

  return { basic, evolution, blooming };
}

// Split grades's abilities html into array
function splitAbilities($, skillsHTML) {
  const html = skillsHTML
    .replace(regexDownChar, '')
    .replace(regexBr, '\n')
    .trim();
  const text = encode($, html);
  const skills = text.split('\n\n');

  return fixAbilities(skills);
}

function splitSkill($, skillHTML) {
  const [name, triggerRate, description] = skillHTML
    .split(br)
    .map((html) => encode($, html));

  return { name, triggerRate, description };
}

function encode($, html) {
  return $('<div/>').html(html).text().trim();
}

// New function to fix ability newline
// Remove it in #splitAbilities, show/processor.js#parseAbilities if want old version
function fixAbilities(abilities) {
  return abilities.map(ability => ability
    .replace(/\s*/g, '')
    .replace(/※/g, '\n※')
  )
}

// Find delim by patter then split string by delim
// Return [originalString, null] if no delim found
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
  parseAbilities,
  splitSkill,
  fixAbilities,
}
