import { crawl, simplePreset } from './src'

crawl(simplePreset)
  .then(() => console.log('ok'))
  .catch((error) => {
    console.log(error)
    throw error
  })
