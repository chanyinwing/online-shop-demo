import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from './CartContext'


export default function QuantityBtn({productInfo}) {
    const {cartItems, setCartItems} =useContext(CartContext)
    let [numInCart, setNumInCart] = useState(0)

    const handleAdd = ()=>{
        setNumInCart(numInCart+1)
    }
    const handleSubtract = ()=>{
        setNumInCart(numInCart-1)
    }

  return (
    <div> {cartItems}
        {
            numInCart<=0 ?
            <div onClick={handleAdd}>Add {productInfo.name} to Cart</div> :
            <div>
                <span onClick={handleSubtract}>-</span>
                {numInCart}
                <span onClick={handleAdd}>+</span>
            </div>
        }
    </div>
  )
}
