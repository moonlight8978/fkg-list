import React from 'react';

import Routes from './routes';
import Navbar from './components/navbar';

import './app.scss';

function App() {
  return (
    <div className="">
      <Navbar />

      <div className="container body">
        <Routes />
      </div>
    </div>
  );
}

export default App;
