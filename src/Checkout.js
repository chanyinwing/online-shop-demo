import React, { useContext } from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import { CartContext } from './CartContext'

export default function Checkout() {

  let cartItem = useContext(CartContext)
  let {cartItems} = cartItem
  //可用destructuring直接一句過 let{cartItems} = useContext(CartContext)

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
          <div className='nothingInCart'>
            It seems you haven't picked up anything yet <br/>
              <Link to="/">Back to Product List</Link>
          </div>
        
        }

        {
          !cartEmpty &&
          <div>
            <div classNmae="container">
              <div id="cartSection">
                <table className="checkoutTable">
                  <tbody>
                    {
                      cartItems.map(product=>(
                        <tr key={product.id}>
                          <td>
                            <Link to={"/product/"+product.id}>
                              <img src={process.env.PUBLIC_URL + "/img/" + product.image} alt={product.name}/>
                            </Link>
                          </td>
                          <td>
                            <p>Product Name: {product.name}</p>
                            <p>Description: {product.description}</p>
                            <p>Price: ${product.price}</p>
                          </td>
                          <td width="200">
                            <QuantityBtn productInfo={product}/>
                          </td>
                          <td>
                            <div className="productSubTotal">
                              ${product.price*product.quantity}
                            </div>
                          </td>
                        </tr>
                    ))}
                  </tbody>
                </table>
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
          </div>
        }
    </div>
  )
}
