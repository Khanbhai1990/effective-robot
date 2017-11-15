import React, { Component } from 'react'
import CartHeader from './CartHeader'
import CartItems from './CartItems'
import AddItem from './AddItem'
import CartFooter from './CartFooter'

class ShoppingCart extends Component {

  handleItemAdded = (id) => {
    console.log('handleItemAdded was called and passed the id: ', id)
  }

  render() {
    console.log('ShoppingCart component', this)
    return (
      <div>
        <CartHeader />
        <CartItems items={this.props.items}/>
        <AddItem products={ this.props.products } itemAdded={ this.handleItemAdded }  />
        <CartFooter year={this.props.year}/>
      </div>
    )
  }
}

export default ShoppingCart
