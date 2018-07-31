const Crawler = require('crawler')
const fs = require('fs')
var path = require('path')

const FileUtils = require('./utils/file-utils')

function crawl({ type, queuePath }) {
  const outputDir = path.join(BUILD_DIR, `${type}s`)
  clearDirectory(outputDir)

  const queue = loadQueue(queuePath)
  const c = new Crawler({
    rateLimit: 1000,
    callback: function(err, res, done) {
      if (err) {
        console.error(err.stack)
      } else {
        const $ = res.$
        const title = $('title').text().split('-')[0].trim()

        saveCrawledData([outputDir, title], res.body)
      }
      done()
    }
  })

  c.queue(queue)
}

function saveCrawledData([outputDir, title], body) {
  try {
    fs.writeFileSync(path.join(outputDir, `${title}.html`), body)
    console.log(`${title} was saved!`)
  } catch (error) {
    console.log(error.stack)
  }
}

function clearDirectory(dir) {
  const files = FileUtils.readDir(dir)
  files.forEach(file => {
    try {
      fs.unlinkSync(path.join(dir, file))
    } catch (error) {
      console.log(error.stack)
    }
  })
}

function loadQueue(queuePath) {
  let content = fs.readFileSync(queuePath)
    .toString('utf-8')
    .trim()

  if (path.extname(queuePath) === '.txt') {
    content = content.replace(/(^")|("$)/g, '')
  }

  return JSON.parse(content)
}

module.exports = crawl
