const request = require('request')
const fs = require('fs')
const path = require('path')

const FileUtils = require('./utils/file-utils')

const IMAGES_DIR = 'build/images'
const DELAY_TIME = 400  // ms

async function download(url, fileName) {
  const imageOutputPath = path.join(IMAGES_DIR, fileName)

  if (isImageExists(imageOutputPath)) {
    return
  }

  await waitFor(DELAY_TIME)

  const requestSettings = {
    url: url,
    encoding: null,
  }
  console.log(`Downloading ${fileName}`)
  await makeRequestAndSaveResponse(requestSettings, imageOutputPath)
  console.log(`${fileName} has been saved`)
}

function makeRequestAndSaveResponse(settings, outputPath) {
  return new Promise((resolve, reject) => {
    request(settings, (error, response, body) => {
      fs.writeFileSync(outputPath, body)
      resolve(1)
    })
  })
}

function isImageExists(imageOutputPath) {
  return fs.existsSync(imageOutputPath)
}

async function downloadImages(unitsDbPath) {
  const units = JSON.parse(FileUtils.read(unitsDbPath))
  await asyncForEach(units, async (unit, unitIndex) => {
    await asyncForEach(unit.images, async (imageUrl, imageIndex) => {
      const imageName = `${unit.id}_${imageIndex}`
      await download(imageUrl, imageName)
    })
  })
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array)
  }
}

function waitFor(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, duration)
  })
}

function removeBrokenImages() {
  const files = FileUtils.readDir(IMAGES_DIR)
  files.forEach(file => {
    const filePath = path.join(IMAGES_DIR, file)
    const content = FileUtils.read(filePath).toString()
    if (isFileBroken(content)) {
      FileUtils.remove(filePath)
      console.log(`${file} has been removed.`)
    }
  })
}

function isFileBroken(content) {
  return content === 'undefined'
}

module.exports = {
  downloadImages,
  removeBrokenImages,
}
