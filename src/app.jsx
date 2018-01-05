import React from 'react'

import Routes from './routes'
import Navbar from './components/navbar'
import Footer from './components/footer'

import './app.scss' 

function App() {
  return (
    <div className="">
      <Navbar />

      <div className="container body">
        <Routes />
      </div>

      <Footer />
    </div>
  )
}

export default App
