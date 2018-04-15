import React from 'react'
import ReactDOM from 'react-dom'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

import App from './app'

fontawesome.library.add(solid)
ReactDOM.render(<App />, document.getElementById('root'))
