import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Footer from './layout/footer';
import Navbar from './layout/navbar';
import Routes from './routes';

import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
