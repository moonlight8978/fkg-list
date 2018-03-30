import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import 'jquery/dist/jquery.min.js';
import 'jquery-ui/ui/widgets/slider.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'jquery-ui/themes/base/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

ReactDOM.render(<App />, document.getElementById('root'));