import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

const home = <Home saludo="Nacho" />;
ReactDOM.render(
  home,
  document.getElementById('root')
);
