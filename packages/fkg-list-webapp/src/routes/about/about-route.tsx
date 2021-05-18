import { FormattedMessage, useIntl } from 'react-intl'

import Layout from '../../components/layout'
import { useTitle } from '../../utils/page-title'

export default function AboutRoute() {
  const intl = useIntl()

  useTitle(intl.formatMessage({ id: 'routes.about.title' }))

  return (
    <Layout>
      <div>
        <FormattedMessage id="routes.about.title" />
      </div>
    </Layout>
  )
}
