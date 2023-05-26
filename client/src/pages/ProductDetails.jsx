import  { useEffect, useState } from 'react'
import Details from '../components/Details'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const {id} = useParams()
  const [product, setProduct] = useState([])

  const getProductById = async ()=>{
    const {data} = await axios.get(`/api/product/${id}`)
    setProduct([...product,...data.data]);
  }
  useEffect(()=>{
    getProductById()
  },[])
  return (
    <div className='product-container'>
      {product.map(ele=>  <Details key={ele.id} product={ele}/>)}
       
    </div>
  )
}

export default ProductDetails
