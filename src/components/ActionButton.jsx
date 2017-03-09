import React from 'react';

export default class ActionButton extends React.Component {
  handleClick(){
    console.log('Click!!')
  }

  render(){
    return (
      <a href="#" onClick={this.handleClick}>
        ClickMe
      </a>
    )
  }
}
