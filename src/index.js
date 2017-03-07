import React from 'react';
import ReactDOM from 'react-dom';

// initial target dom
var element = document.createElement('div');
element.id = "app";
document.body.appendChild(element)

const element = <h1>hello world</h1>

ReactDOM.render(
  element,
  document.getElementById('app')
);
