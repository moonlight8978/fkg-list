import { Modal as BSModal } from 'bootstrap'
import classNames from 'classnames'
import { HTMLProps, ReactNode, useEffect, useRef } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {
  onClose?: () => any
  children: ReactNode
  visible: boolean
}

const noop = () => {}

export default function Modal({ onClose = noop, children, visible, className, ...props }: Props) {
  const modalHtml = useRef<HTMLDivElement | null>()
  const modal = useRef<BSModal | null>()

  // useEffect(() => {
  //   modalHtml.current?.removeEventListener('hidden.bs.modal', onClose)
  //   modalHtml.current?.addEventListener('hidden.bs.modal', onClose)

  //   return () => {
  //     modal.current?.hide()
  //     modal.current?.dispose()
  //     modalHtml.current?.removeEventListener('hidden.bs.modal', onClose)
  //   }
  // }, [onClose])

  // useEffect(() => {
  //   if (visible) {
  //     modal.current?.show()
  //   } else {
  //     modal.current?.hide()
  //   }
  // }, [visible])

  return (
    <div
      {...props}
      className={classNames('modal show', className)}
      tabIndex={-1}
      ref={(element) => {
        if (element && !modalHtml.current) {
          modalHtml.current = element
          modal.current = new BSModal(element, { backdrop: 'static' })
          modalHtml.current.addEventListener('hidden.bs.modal', onClose)
          if (visible) {
            modal.current.show()
          }
        }
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  )
}
