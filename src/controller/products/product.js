
import { productQuery, getProductByCategoryQuery, getHomeProduct, filterProductsByPriceQuery, getAllProductsQuery, getProductsByTitleQuery, getProductByIdQuery } from '../../database/query/product.query.js'

const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsQuery()
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const createProduct = async (req, res) => {
  try {
    const { title, description, image, price, category } = req.body
    await productQuery({ title, description, image, price, category })

    res.status(201).json({
      error: false,
      data: {
        message: 'Your product has been created successfully'
      }
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: true,
      data: {
        message: 'An error occurred while creating your product'
      }
    })
  }
}

const homeProduct = async (req, res) => {
  try {
    const data = await getHomeProduct()
    res.status(200).json(data.rows)
  } catch (err) {
    console.log(err)
  }
}

const filterProductByName = async (req, res) => {
  try {
    const { title } = req.params
    const data = await getProductsByTitleQuery(title)
    res.status(200).json(data.rows)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
}

const getProductByCategory = async (req, res) => {
  try {
    const { category } = req.params
    const data = await getProductByCategoryQuery(category)
    res.status(200).json(data.rows)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
}

const filterProductsByPriceController = async (req, res) => {
  try {
    const { price } = req.params
    const products = await filterProductsByPriceQuery(price)
    res.json(products.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const getProductById = async (req, res) => {
  try {
    const { id } = req.params

    const data = await getProductByIdQuery(id)

    if (data.rows.length > 0) {
      res.status(200).json({
        message: 'get product by id successfully',
        data: data.rows
      })
    } else {
      res.status(404).json({
        message: 'there is no product with such id'
      })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { createProduct, getProductByCategory, homeProduct, filterProductsByPriceController, getAllProductsController, filterProductByName, getProductById }
