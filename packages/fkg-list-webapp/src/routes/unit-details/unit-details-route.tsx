import { ModalRoute } from '../../components/modal'
import { useModalRoute } from '../../components/modal/modal-route'
import { routePaths } from '../../config/route-defs'

export default function UnitDetailsRoute() {
  const { close, ...modalRouteProps } = useModalRoute(routePaths.units)

  return (
    <ModalRoute {...modalRouteProps} isVisible onClose={() => {}}>
      <div className="modal-body">
        <div>
          <span
            style={{
              borderRadius: 999,
              backgroundColor: 'blue',
              color: 'white',
              width: '30px',
              height: '30px',
              display: 'inline-block',
            }}
          >
            打
          </span>
          <span>嗚呼嗚呼嗚呼[浴衣]</span>
          <button type="button" className="btn-close" aria-label="Close" onClick={close} />
        </div>
      </div>
    </ModalRoute>
  )
}
