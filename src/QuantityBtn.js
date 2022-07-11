import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from './CartContext'


export default function QuantityBtn({productInfo}) {

    const {cartItems, setCartItems} = useContext(CartContext)

    let productIndexInCart = cartItems.findIndex((element) => {
        return element.id === productInfo.id
    })
    //有=return index
    //無=return -1

    let [numInCart, setNumInCart] = useState(
        (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
    )

    const handleAdd = ()=>{

        if(productIndexInCart === -1)
        {
            setCartItems(
                [{
                    id : productInfo.id, 
                    name : productInfo.name, 
                    image : productInfo.image, 
                    price : productInfo.price, 
                    description : productInfo.description,
                    quantity : 1
                },
                ...cartItems])}
        else{
            let newCartItems  = [...cartItems]
            newCartItems[productIndexInCart].quantity++
            setCartItems(newCartItems) 
        }
        setNumInCart(numInCart+1)
    }

    const handleSubtract = ()=>{
        if(cartItems[productIndexInCart].quantity === 1){
            //remove
            let newCartItems = [...cartItems]
            newCartItems.splice(productIndexInCart, 1) 
            setCartItems(newCartItems)
        }
        else{
            //-quantity
            let newCartItems = [...cartItems]
            newCartItems[productIndexInCart].quantity--
            setCartItems(newCartItems)
        }
        setNumInCart(numInCart-1)
    }

  return (
    <div className='addToCart'> 
        { 
            (numInCart===0) ?
            <span className='addToCartBtn' onClick={handleAdd}>Add to Cart</span> :
            <div>
                <span className="subtractBtn" onClick={handleSubtract}>-</span>
                {numInCart}
                <span className="addBtn" onClick={handleAdd}>+</span>
            </div>
        }
    </div>
  )
}