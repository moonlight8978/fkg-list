import { ModalRoute } from '../../components/modal'
import { useModalRoute } from '../../components/modal/modal-route'
import { routePaths } from '../../config/route-defs'

export default function UnitDetailsRoute() {
  const { close, ...modalRouteProps } = useModalRoute(routePaths.units)

  return (
    <ModalRoute {...modalRouteProps}>
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={close} />
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
    </ModalRoute>
  )
}
