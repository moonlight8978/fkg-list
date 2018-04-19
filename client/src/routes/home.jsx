import React from 'react'
import { Link } from 'react-router-dom'

import { Box, BoxItem } from '../common/box'
import { Layout } from '../layout'

function Home() {
  return (
    <Layout>
      <Box hasItems>
        <BoxItem>
          Simple FKG list view using
          <span>&nbsp;</span>
          <a href="https://reactjs.org/" alt="React">React</a>
        </BoxItem>

        <BoxItem>
          <Link to="/test">Test route</Link>
        </BoxItem>
      </Box>
    </Layout>
  )
}

export default Home
