import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import Title from './Title'

export default function ProductDetail() {

    let params = useParams()
    let [productDetail, setProductDetail] = useState(null)

    useEffect(()=>{
      fetch("https://chanyinwing.github.io/demoapi/react-basic-product.json")
      .then(res=>res.json())
      .then(data=>{
        let productInfo = data.find((element)=>{
          return element.id === parseInt(params.id) //element.id本身係integer, 但params.id係字串
        })
        setProductDetail(productInfo)
      })
  },[params.id])

  return (
    <div>
      {
        productDetail &&
          <div className='ProductDetail'>
            <Title mainTitle={productDetail.name+" Details"}/>
            <img src={process.env.PUBLIC_URL + "/img/"+productDetail.image} alt={productDetail.name} width="400px"/>
            <p>Product Name: {productDetail.name}</p>
            <p>Price: {productDetail.price}</p>
            <p>Description: {productDetail.description}</p>
            <QuantityBtn productInfo={productDetail}/>

            <Link className="backToProductListBtn" to="/">Back to Home Page</Link>
          </div>
      }
    </div>
  )
}
