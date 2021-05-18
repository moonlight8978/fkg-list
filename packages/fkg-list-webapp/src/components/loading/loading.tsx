import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'

interface Props {
  size?: FontAwesomeIconProps['size']
  className?: FontAwesomeIconProps['className']
}

export const Loading = ({ size = '2x', className = undefined }: Props) => (
  <div className={classnames('text-center my-3', { className })}>
    <FontAwesomeIcon icon="spinner" spin size={size} />
  </div>
)
