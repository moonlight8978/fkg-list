import { ReactNode, useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { CSSTransition } from 'react-transition-group'

import Modal from './modal'

interface Props {
  onClose: () => any
  isVisible: boolean
  children: ReactNode
}

export default function ModalRoute({ onClose, isVisible, children }: Props) {
  return (
    <CSSTransition
      classNames={{
        exit: 'animate__fadeOut',
      }}
      timeout={300}
      in={isVisible}
      unmountOnExit
    >
      <Modal onClose={onClose} visible className="animate__animated animate__fadeIn">
        {children}
      </Modal>
    </CSSTransition>
  )
}

export const useModalRoute = (fallbackPath: string): { isVisible: boolean; onClose: () => any; close: () => any } => {
  const [isVisible, setIsVisible] = useState(true)
  const history = useHistory()

  const goBack = useCallback(() => {
    if (history.goBack) {
      history.goBack()
    } else {
      history.push(fallbackPath)
    }
  }, [history, fallbackPath])

  const close = useCallback(() => {
    setIsVisible(false)
  }, [setIsVisible])

  return { isVisible, close, onClose: goBack }
}
