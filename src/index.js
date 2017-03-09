import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome.jsx'

// initial target dom
var element = document.createElement('div');
element.id = "app";
document.body.appendChild(element)

function multiName(){
  return (
    <div>
      <Welcome name="nasum" />
      <Welcome name="masaya" />
      <Welcome name="nasu" />
    </div>
  )
}
ReactDOM.render(
  multiName(),
  document.getElementById('app')
);
