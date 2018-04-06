import StringUtils from './string'

const PREMIUM_GACHA = 'プレミアムガチャ 6%'
const NORMAL_GACHA = 'ノーマルノーマルガチャ'

function filter(fkgs, { obtainBy, keyword, minStar, maxStar, ...attrs }) {
  const attributes = setupAttributes(attrs)

  const filterAlgorithm = fkg => {
    if (keyword.trim() && !StringUtils.find(fkg.name, keyword)) {
      return false
    }

    if (fkg.star < minStar || fkg.star > maxStar) {
      return false
    }

    if (!attributes.includes(fkg.attribute)) {
      return false
    }

    if (obtainBy.trim()) {
      if (obtainBy === 'gacha' && fkg.obtainBy !== PREMIUM_GACHA) {
        return false
      } else if (obtainBy === 'event' && (fkg.obtainBy === PREMIUM_GACHA || fkg.obtainBy === NORMAL_GACHA)) {
        return false
      }
    }

    return true
  }

  return fkgs.filter(filterAlgorithm)
}

function setupAttributes({ redAttr, yellowAttr, blueAttr, purpleAttr }) {
  return [
    redAttr ? 'red' : null,
    blueAttr ? 'blue' : null,
    yellowAttr ? 'yellow' : null,
    purpleAttr ? 'purple' : null,
  ].filter(attr => attr !== null)
}

export default filter
