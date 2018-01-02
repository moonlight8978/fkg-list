import React from 'react';
import { Route } from 'react-router-dom';

import Girls from './../components/girls';
import './routes.scss';

class Routes extends React.Component {
  render() {
    return (
      <div className="container body">
        <Route path="/girls" component={Girls} />
      </div>
    );
  }
}

export default Routes;
