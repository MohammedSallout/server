import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from '../components/Card';

function Category() {
  const { category } = useParams()
  const [categories, setCategories] = useState([])

  const getByCategory = async () => {
    const {data} = await axios.get(`/api/products/filter/${category}`)
    setCategories([...data])
  }

  useEffect(() => {
    getByCategory()
  }, [category])

  return (

    <div className="shop">
      <h2>category</h2>
      <div className="allProducts">
        {categories?.map((category) => <ProductCard key={category.id} product={category} />)}
      </div>

    </div>
  )
}

export default Category
