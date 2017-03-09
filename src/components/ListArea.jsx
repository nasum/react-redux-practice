import React from 'react';
import ListItem from './ListItem.jsx';

export default class ListArea extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      numbers: [1]
    }

    this.addItem = this.addItem.bind(this)
  }

  addItem(){
    let tmpNumbers  = this.state.numbers;
    tmpNumbers.push(tmpNumbers[tmpNumbers.length - 1] + 1)
    this.setState({
      numbers: tmpNumbers
    });
  }

  render(){
    console.log(this.state.numbers)
    const listItems = this.state.numbers.map((number) =>
      <ListItem key={number.toString()} data={number} />
    );

    return (
      <div>
        <button onClick={this.addItem}>
          add item
        </button>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}
