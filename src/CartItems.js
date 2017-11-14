import React from 'react';

const CartItems = (props) => {
  console.log('people in CartItems', props.peopleObj2)
  let peopleList = props.peopleObj2.map((person, index) => <li key={index}>{person.name}</li>)
  return (
    <div className="container">
      <h1>Items</h1>
      <ul>
        {peopleList}
      </ul>
    </div>
  )
}

export default CartItems;
