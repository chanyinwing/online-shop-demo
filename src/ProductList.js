import {Link} from 'react-router-dom'
import React from 'react'
import styles from './ProductList.module.css'
import Title from './Title'

export default function ProductList() {

    let productList = [
        {"id":1, "name":"Apple", "price":"5", "image":"apple.jpg", "description":"Fresh apple 50g, An apple a day, keeps the doctor away"},
        {"id":2, "name":"Orange", "price":"3", "image":"Orange.jpg", "description":"Fresh orange 50g, It's tasty"},
        {"id":3, "name":"Mango", "price":"4", "image":"Mango.jpg", "description":"Fresh mango 500g, Good to make dessert"},
        {"id":4, "name":"Watermelon", "price":"20", "image":"Watermelon.jpg", "description":"Fresh watermelon 2kg, Make you cool in summer"},
        {"id":5, "name":"Blueberry", "price":"10", "image":"Blueberry.jpg", "description":"Fresh blueberry 50g, Help protect you eyes"},
        {"id":6, "name":"White Radish", "price":"5", "image":"white-radish.jpg", "description":"Fresh white radish 1kg, Good to make soup"},
    ]



  return (
    <div>
        <Title mainTitle="Please Choose The Products You Want"/>
        <div>
            {
                productList.map(product =>(
                    <div className={styles.productBorder} key={product.id}>
                        {product.name}<br/>
                        {product.price}<br/>
                        <Link to={"/product/" + product.id}>
                            <img src={process.env.PUBLIC_URL + "/img/"+product.image}/>
                        </Link>
                        <br/>
                        {product.description}<br/>
                    </div>
                ))
            }
        </div>
    </div>

  )
}
