import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

const render = Component => {
  ReactDOM.render(
    <Component saludo="Nacho" />,
    document.getElementById('root')
  )
}
render(Home);

if(module.hot) {
  module.hot.accept();
}
