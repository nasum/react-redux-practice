import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome.jsx';
import Clock from './components/Clock.jsx';
import ActionButton from './components/ActionButton.jsx';

// initial target dom
var element = document.createElement('div');
element.id = "app";
document.body.appendChild(element)

function app(){
  return (
    <div>
      <Welcome name="nasum" />
      <Clock date={new Date()}/>
      <ActionButton />
    </div>
  )
}

ReactDOM.render(
  app(),
  document.getElementById('app')
);
