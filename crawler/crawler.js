const Crawler = require('crawler');
const fs = require('fs');

const c = new Crawler({
  rateLimit: 1000,
  callback: function(err, res, done) {
    if (err) {
      console.error(err.stack);
    } else {
      const $ = res.$;
      const title = $('title').text().split('-')[0].trim();

      fs.writeFile(`./html/${title}.html`, res.body, function(err) {
        if (err) {
          return console.log(err);
        }

        console.log("The file was saved!");
      });
    }
    done();
  }
})

c.queue([
  'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85',
  'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85',
  'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85%E2%98%85',
  'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85%E2%98%85',
  'http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E2%98%85%E2%98%85',
]);
