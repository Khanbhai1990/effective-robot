import React from 'react'
import CartHeader from './CartHeader'
import CartItems from './CartItems'
import CartFooter from './CartFooter'

const ShoppingCart = ({ peopleObj }) => {
  console.log('ShoppingCart props: ', peopleObj)
  return (
    <div>
      <CartHeader />
      <CartItems peopleObj2={peopleObj}/>
      <CartFooter />
    </div>
  )
}

export default ShoppingCart
