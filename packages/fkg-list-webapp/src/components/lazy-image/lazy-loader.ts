import LazyLoad from 'vanilla-lazyload'
import { Bus } from 'baconjs'

const lazyLoadInstance = new LazyLoad()

const queue = new Bus<string>()
queue.debounce(100).subscribe(() => {
  console.log('loading images')
  lazyLoadInstance.update()
})

const lazyloader = {
  update() {
    queue.push('1')
  },
}

export default lazyloader
