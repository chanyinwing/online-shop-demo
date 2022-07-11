import {Link} from 'react-router-dom'
import React from 'react'
import Title from './Title'
import { useState, useEffect } from 'react'
import QuantityBtn from './QuantityBtn'

export default function ProductList() {

    let [productList, setProductList] = useState([])

    useEffect(()=>{
        fetch("https://chanyinwing.github.io/demoapi/react-basic-product.json")
        .then(res=>res.json())
        .then(data=>setProductList(data))
    },[])


  return (
    <div>
        <Title mainTitle="Please Choose The Products You Want"/>
        <div>
            {
                productList.map(product =>(
                    <div className="containerItem" key={product.id}>
                        {product.name}<br/>
                        {product.price}<br/>
                        <Link to={"/product/" + product.id}>
                            <img src={process.env.PUBLIC_URL + "/img/"+product.image} alt={product.name}/>
                        </Link>
                        <br/>
                        {product.description}<br/>
                        <QuantityBtn productInfo={product}/>
                    </div>
                ))
            }
        </div>
    </div>

  )
}
