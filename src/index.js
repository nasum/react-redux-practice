import React from 'react';
import ReactDOM from 'react-dom';

// initial target dom
var element = document.createElement('div');
element.id = "app";
document.body.appendChild(element)

function tick(){
  const element = (
    <div>
      <h1>hello world</h1>
      It is {new Date().toLocaleTimeString()}.
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('app')
  );
}

setInterval(tick, 1000)
