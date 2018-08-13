const request = require('request')
const fs = require('fs')

const FileUtils = require('./utils/file-utils')

const IMAGES_DIR = 'build/images'

const DELAY_TIME = 400  // ms

function download(url, fileName) {
  const requestSettings = {
    url: url,
    encoding: null,
  }
  const output = `${IMAGES_DIR}/${fileName}`

  const isImageExists = fs.existsSync(output)
  if (isImageExists) {
    console.log(`Skipped ${fileName}`)
    return
  }

  console.log(`Downloading ${fileName}`)
  request(requestSettings, (error, response, body) => {
    fs.writeFileSync(output, body)
    console.log(`${fileName} has been saved`);
  })
}

function downloadImages(output) {
  const units = JSON.parse(FileUtils.read(output))
  units.forEach((unit, unitIndex) => {
    setTimeout(() => {
      unit.images.forEach((imageUrl, imageIndex) => {
        setTimeout(() => {
          const imageOutput = `${unit.id}_${imageIndex}.jpg`
          download(imageUrl, imageOutput)
        }, DELAY_TIME * imageIndex)
      })
    }, DELAY_TIME * unitIndex * 3)
  })
}

module.exports = downloadImages
