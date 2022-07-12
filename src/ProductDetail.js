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
    <div >
      {
        productDetail &&
          <div className='ProductDetail'>
            <Title mainTitle={productDetail.name+" Details"}/>

            <table width="100%">
              <tbody>
                <tr>
                  <td align='right'>
                    <img src={process.env.PUBLIC_URL + "/img/"+productDetail.image} alt={productDetail.name} width="400px"/>
                  </td>
                  <td width="45%" padding="10">
                    Name: {productDetail.name}<br/>
                    Price: {productDetail.price}<br/>
                    Description: {productDetail.description}<br/>
                    <QuantityBtn productInfo={productDetail}/>
                  </td>
                </tr>
              </tbody>
            </table>
         </div>
      }

        <Link to="/">
          <div className="backToProductListBtn">Back to Home Page</div>
        </Link>    
      </div>
  )
}
