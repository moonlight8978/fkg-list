/* eslint-disable no-nested-ternary */
import ReactLazyLoad from 'react-lazyload'

export default class LazyLoad extends ReactLazyLoad {
  render() {
    // @ts-expect-error
    const { height, children, placeholder, className, classNamePrefix, style } = this.props

    return (
      // @ts-expect-error
      <tr className={`${classNamePrefix}-wrapper ${className}`} ref={this.setRef} style={style}>
        {/* @ts-expect-error */}
        {this.visible
          ? children
          : placeholder || (
              <td>
                <div style={{ height }} className={`${classNamePrefix}-placeholder`} />
              </td>
            )}
      </tr>
    )
  }
}
