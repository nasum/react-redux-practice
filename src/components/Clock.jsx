import React from 'react';

export default class Clock extends React.Component {
  render(){
    return (
      <div>
        It is { this.props.date.toLocaleTimeString() }.
      </div>
    )
  }
}
