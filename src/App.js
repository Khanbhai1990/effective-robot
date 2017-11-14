import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  render() {

    let people = [
      { name: 'james', age: 45 },
      { name: 'bob', age: 33 },
      { name: 'jane', age: 25 }
    ];

    return (
      <div className="App">
        <ShoppingCart  year="2000" peopleObj={people} />
      </div>
    );
  }
}

export default App;
