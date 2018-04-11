import React from 'react'

import { Box, BoxItem } from '../common/box'
import Layout from '../layout/layout'

function Home() {
  return (
    <Layout>
      <Box hasItems>
        <BoxItem>
          Simple FKG list view using
          <span>&nbsp;</span>
          <a href="https://reactjs.org/" alt="React">React</a>
        </BoxItem>
      </Box>
    </Layout>
  )
}

export default Home
