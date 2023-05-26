import axios from 'axios'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import TestArea from '../components/TestArea'
import '../style/seller.css'
import {useState } from 'react'
function Seller() {

  const options = ['phone','laptop','accessories']

  const [product, setProduct] = useState(
    {
      title: '',
      image: '',
      price: 0,
      description: '',
      category: ''
    }
  )

  const handleFormChange = (e) => {
    setProduct({...product, [e.target.name]:e.target.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('/api/product', product)
  }


  return (
    <div className='seller'>
      <form className='seller-form' onSubmit={handleSubmit}>
        <Input
          name='title'
          value={product.title}
          setFunction={handleFormChange} />
        <Input
          name='image'
          value={product.image}
          setFunction={handleFormChange} />
        <Input
          name='price'
          value={product.price}
          setFunction={handleFormChange} />
        <TestArea
          name='description'
          value={product.description}
          setFunction={handleFormChange} />
        <Select
          name='category'
          value={product.category}
          options={options}
          setFunction={handleFormChange} />
        <Button name='Add Product' />
      </form>
    </div>
  )
}

export default Seller
