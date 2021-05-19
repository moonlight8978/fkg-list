import LazyLoad from 'vanilla-lazyload'
import { Bus } from 'baconjs'

import { logger } from '../../utils/logger'

const lazyLoadInstance = new LazyLoad()

const queue = new Bus<string>()
queue.debounce(100).subscribe(() => {
  logger.info('loading images')
  lazyLoadInstance.update()
})

const lazyloader = {
  update() {
    queue.push('1')
  },
}

export default lazyloader
