const Crawler = require('crawler')
const fs = require('fs')


crawl('build/lists',
  [
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85%E2%98%85',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85',
  ]
)

crawl('build/items',
  [
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%88%E3%83%AA%E3%82%AB%E3%83%96%E3%83%88',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A2%E3%83%8D%E3%83%A2%E3%83%8D%28%E4%B8%96%E7%95%8C%E8%8A%B1%E3%81%AE%E5%B7%AB%E5%A5%B3%29',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%B9%E3%82%A4%E3%83%AC%E3%83%B3',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%BB%E3%83%B3%E3%83%88%E3%83%9D%E3%83%BC%E3%83%AA%E3%82%A2',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A2%E3%83%AB%E3%82%B9%E3%83%88%E3%83%AD%E3%83%A1%E3%83%AA%E3%82%A2',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%B7%E3%82%AF%E3%83%A9%E3%83%A1%E3%83%B3',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%87%E3%83%AB%E3%83%95%E3%82%A3%E3%83%8B%E3%82%A6%E3%83%A0%28%E7%AB%B6%E6%8A%80%E4%BC%9A%29',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AB%E3%82%AC%E3%83%9F',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AD%E3%83%B3%E3%82%BB%E3%83%B3%E3%82%AB',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%9E%E3%83%B3%E3%83%AA%E3%83%A7%E3%82%A6%28%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%B3%E3%83%96%E3%83%A9%E3%82%A4%E3%83%89%29',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%B5%E3%83%95%E3%83%A9%E3%83%B3%28%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%29',
    'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A2%E3%83%96%E3%83%A9%E3%83%8A',
  ]
)

function crawl(des, queue) {
  const c = new Crawler({
    rateLimit: 1000,
    callback: function(err, res, done) {
      if (err) {
        console.error(err.stack)
      } else {
        const $ = res.$
        const title = $('title').text().split('-')[0].trim()

        fs.writeFile(`${des}/${title}.html`, res.body, function(err) {
          if (err) {
            return console.log(err)
          }

          console.log("The file was saved!")
        })
      }
      done()
    }
  })

  c.queue(queue)
}

module.exports = crawl
