import { HTMLProps, useEffect } from 'react'
import LazyLoad from 'vanilla-lazyload'
import classnames from 'classnames'

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad()
}

interface Props extends HTMLProps<HTMLImageElement> {
  placeholderSrc: string
}

export default function LazyImage({ src, placeholderSrc, className, ...props }: Props) {
  useEffect(() => {
    document.lazyLoadInstance.update()
  }, [])

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...props} src={placeholderSrc} data-src={src} className={classnames('lazy', className)} />
}
