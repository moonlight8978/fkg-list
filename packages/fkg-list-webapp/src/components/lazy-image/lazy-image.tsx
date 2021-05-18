/* eslint-disable jsx-a11y/alt-text */
import { HTMLProps, useEffect } from 'react'
import classnames from 'classnames'

import lazyloader from './lazy-loader'

interface Props extends HTMLProps<HTMLImageElement> {
  placeholderSrc: string
}

export default function LazyImage({ src, placeholderSrc, className, ...props }: Props) {
  useEffect(() => {
    lazyloader.update()
  }, [])

  // @ts-expect-error
  return <img {...props} src={placeholderSrc} data-src={src} className={classnames('lazy', className)} />
}
