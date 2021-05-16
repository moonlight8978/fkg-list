import path from 'path'
import fs from 'fs'

const cacheFilePath = path.join(process.cwd(), 'tmp', '.cache.json')

export const cache = {
  read(cacheKey: string) {
    const cacheFile = fs.readFileSync(cacheFilePath)
    const cacheData = JSON.parse(cacheFile)
    return cacheData[cacheKey]
  },
  createCacheFileIfNotExists() {
    if (!fs.existsSync(cacheFilePath)) {
      fs.writeFileSync(cacheFilePath, JSON.stringify({}))
    }
  },
  write(cacheKey: string, data: any) {
    const cacheFile = fs.readFileSync(cacheFilePath)
    const cacheData = JSON.parse(cacheFile)
    cacheData[cacheKey] = data
    fs.writeFileSync(cacheFilePath, JSON.stringify(cacheData))
  },
  readAll() {
    const cacheFile = fs.readFileSync(cacheFilePath)
    return JSON.parse(cacheFile)
  },
}
