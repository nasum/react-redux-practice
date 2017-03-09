import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome.jsx'

// initial target dom
var element = document.createElement('div');
element.id = "app";
document.body.appendChild(element)

const helloElements = <Welcome name="nasum" />;
ReactDOM.render(
  helloElements,
  document.getElementById('app')
);
