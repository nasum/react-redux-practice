import React from 'react';

export default class ListItem extends React.Component {
  render(){
    return (
      <li key={this.props.key}>
        {this.props.data}
      </li>
    )
  }
}
