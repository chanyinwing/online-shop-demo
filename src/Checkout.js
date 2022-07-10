import React from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'
import QuantityBtn from './QuantityBtn'

export default function Checkout() {

  let cartItem = 
  {
    "cartItems": 
    [
      {
        "id":5, 
        "name":"Blueberry", 
        "price":"10", 
        "image":"blueberry.jpg", 
        "description":"Fresh blueberry 50g, Help protect you eyes",
        "quantity":3
      }, 
      {
        "id":4, 
        "name":"Watermelon", 
        "price":"20", 
        "image":"watermelon.jpg", 
        "description":"Fresh watermelon 2kg, Make you cool in summer",
        "quantity": 6
      }
    ]
  }

  let {cartItems} = cartItem
  let cartEmpty = cartItems.length<=0 ? true : false
  let grandTotal = cartItems.reduce((total, product)=>{
    return total + product.price*product.quantity
  },0)
  let freeShippingPrice = 99
  return (
    <div>
        <Title mainTitle="Checkout"/>

        {
          cartEmpty &&
          <div>
            It seems you haven't picked up anything yet <br/>
            <Link to="/">Back to Product List</Link>
          </div>
        
        }

        {
          !cartEmpty &&
          <div>
            <div id="cartSection">
              {/* 產品列表 */
              cartItems.map(product=>(
                <div key={product.id}>
                  <img src={process.env.PUBLIC_URL + "/img/" + product.image}/><br/>
                  {product.name}<br/>
                  {product.description}<br/>
                  Price: {product.price}<br/>
                  Quantity: {product.quantity}
                  <QuantityBtn/>
                </div>
              ))}
            </div>
            <div id="checkOutSection">
              {
                /*Total Price */
                <div>
                  Total Price: {grandTotal}
                </div>
              }

              {
                /* Free Shipping */
                  grandTotal >= freeShippingPrice ?
                  <div>Free Shipping!</div> :
                  <div>
                    Free Shipping Over ${freeShippingPrice}<br/>
                    Only need {freeShippingPrice - grandTotal} more
                  </div>
              }
            </div>
          </div>
        }
    </div>
  )
}
