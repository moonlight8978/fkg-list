const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const PageParserFactory = require('./page-parser-factory')
const FileUtils = require('./utils/file-utils')
const Unit = require('./unit/unit')
const UnitFromUnitPage = require('./unit/unit-from-unit-page')

function parse(parsingTypes, output) {
  const [originalUnits, upgradedUnits] = parsingTypes.map(({ type, dir }) => {
    const files = FileUtils.readDir(dir)
    const units = files.map(file => {
      const parser = PageParserFactory.newParser(type, path.join(dir, file))
      console.log(`Parsing ${file}`)
      return parser.perform()
    })

    return _.flatten(units)
  })

  const fixedUpgradedUnits = fixRarityUpgradeableUnit(originalUnits, upgradedUnits)

  writeJSON(originalUnits.concat(fixedUpgradedUnits), output)

  // for debugging
  // const parser1 = PageParserFactory.newParser('list', 'build/lists/★★★★★★.html')
  // const unit1 = parser1.perform()
  // console.log(unit1)

  // const parser2 = PageParserFactory.newParser('unit', 'build/units/ホーリー(水着).html')
  // const unit2 = parser2.perform()
  // console.log(unit2)
}

function fixRarityUpgradeableUnit(originalUnits, upgradedUnits) {
  return upgradedUnits.map(unit => {
    const original = Unit.findById(unit.id, originalUnits)
    return UnitFromUnitPage.fix(unit, original)
  })
}

function writeJSON(data, output) {
  const json = JSON.stringify(data, null, 4)
  fs.writeFileSync(output, json)
}

module.exports = parse
