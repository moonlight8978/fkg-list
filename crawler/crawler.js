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
  ["http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%88%E3%83%AA%E3%82%AB%E3%83%96%E3%83%88","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%B9%E3%82%A4%E3%83%AC%E3%83%B3","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A2%E3%83%8D%E3%83%A2%E3%83%8D%28%E4%B8%96%E7%95%8C%E8%8A%B1%E3%81%AE%E5%B7%AB%E5%A5%B3%29","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%BB%E3%83%B3%E3%83%88%E3%83%9D%E3%83%BC%E3%83%AA%E3%82%A2","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A2%E3%83%AB%E3%82%B9%E3%83%88%E3%83%AD%E3%83%A1%E3%83%AA%E3%82%A2","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%B7%E3%82%AF%E3%83%A9%E3%83%A1%E3%83%B3","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%87%E3%83%AB%E3%83%95%E3%82%A3%E3%83%8B%E3%82%A6%E3%83%A0%28%E7%AB%B6%E6%8A%80%E4%BC%9A%29","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AB%E3%82%AC%E3%83%9F","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AD%E3%83%B3%E3%82%BB%E3%83%B3%E3%82%AB","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%9E%E3%83%B3%E3%83%AA%E3%83%A7%E3%82%A6%28%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%B3%E3%83%96%E3%83%A9%E3%82%A4%E3%83%89%29","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%B5%E3%83%95%E3%83%A9%E3%83%B3%28%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%29","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A2%E3%83%96%E3%83%A9%E3%83%8A","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AA%E3%82%B7%E3%83%AD%E3%82%A4%E3%83%90%E3%83%8A","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A4%E3%83%95%E3%82%A7%E3%82%A4%E3%82%AA%E3%83%B3","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A2%E3%82%BA%E3%82%AD","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%9E%E3%83%AB%E3%83%A1%E3%83%AD","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A2%E3%83%87%E3%83%8B%E3%82%A6%E3%83%A0","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A2%E3%83%8D%E3%83%A2%E3%83%8D%28%E5%85%89%E8%8F%AF%E3%81%AE%E5%A7%AB%E5%90%9B%29","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%B7%E3%82%AF%E3%83%A9%E3%83%A1%E3%83%B3%28%E5%85%89%E8%8F%AF%E3%81%AE%E5%A7%AB%E5%90%9B%29","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%A9%E3%83%99%E3%83%B3%E3%83%80%E3%83%BC","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%92%E3%83%8E%E3%82%AD","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%84%E3%82%AD%E3%83%9F%E3%82%BD%E3%82%A6%28%E3%82%A4%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%29","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%96%E3%83%97%E3%83%AC%E3%82%A6%E3%83%AB%E3%83%A0","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%86%E3%83%83%E3%83%9D%E3%82%A6%E3%83%A6%E3%83%AA","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AA%E3%83%B3%E3%82%B7%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%A0","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%97%E3%83%AD%E3%83%86%E3%82%A2","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A8%E3%83%BC%E3%83%87%E3%83%AB%E3%83%AF%E3%82%A4%E3%82%B9","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%B3%E3%83%81%E3%83%A7%E3%82%A6%E3%83%A9%E3%83%B3","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%9F%E3%82%BA%E3%82%A2%E3%82%AA%E3%82%A4","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%9B%E3%83%AB%E3%83%87%E3%83%A5%E3%82%A6%E3%83%A0","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%A2%E3%83%A4%E3%83%A1","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%9B%E3%83%88%E3%83%88%E3%82%AE%E3%82%B9","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AA%E3%83%88%E3%83%A1%E3%82%AE%E3%82%AD%E3%83%A7%E3%82%A6","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%A4%E3%83%9E%E3%83%A6%E3%83%AA","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%91%E3%83%BC%E3%83%97%E3%83%AB%E3%83%91%E3%83%B3%E3%82%B8%E3%83%BC","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%AD%E3%83%BC%E3%83%AC%E3%83%B3%E3%83%86%E3%82%A3%E3%82%A2%28%E5%BF%8D%E8%80%85%29","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%AB%E3%83%89%E3%83%99%E3%82%AD%E3%82%A2%28%E5%BF%8D%E8%80%85%29","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AB%E3%82%AB%E3%83%A9","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AA%E3%83%88%E3%83%A1%E3%83%A6%E3%83%AA","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%8F%E3%83%BC%E3%83%88%E3%82%AB%E3%82%BA%E3%83%A9","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%A8%E3%83%AB%E3%82%AC%E3%82%AA","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%83%E3%83%97","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%B5%E3%83%AF%E3%82%AE%E3%82%AD%E3%83%A7%E3%82%A6","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AB%E3%83%AB%E3%83%9F%E3%82%A2","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%83%AC%E3%82%A4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AD%E3%83%BC%E3%82%BA","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%B3%E3%82%B9%E3%83%A2%E3%82%B9","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%AA%E3%83%8B%E3%83%A6%E3%83%AA","http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E3%82%BF%E3%83%81%E3%83%90%E3%83%8A"]
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

          console.log(`${title} was saved!`)
        })
      }
      done()
    }
  })

  c.queue(queue)
}

module.exports = crawl
