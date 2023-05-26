import connection from '../config/connection.js'

const productQuery = (productData) => {
  const { title, description, image, price, category } = productData

  const sql = {
    text: 'INSERT INTO products (title, description, image, price, category) VALUES ($1 , $2, $3, $4, $5)',
    values: [title, description, image, price, category]
  }

  return connection.query(sql)
}

const getHomeProduct = () => {
  const sql = {
    text: 'SELECT title, image FROM products LIMIT 10;'
  }

  return connection.query(sql)
}

const getProductsByTitleQuery = (title) => {
  const sql = {
    text: 'SELECT * FROM products WHERE title = $1',
    values: [title]
    
  }

  return connection.query(sql)
}

const getProductByCategoryQuery = (category) => {
  const sql = {
    text: 'SELECT * FROM products WHERE category = $1',
    values: [category]
    
  }

  return connection.query(sql)
}

const getAllProductsQuery = () => {
  const sql = {
    text: 'SELECT * FROM products'
  }

  return connection.query(sql)
}

const filterProductsByPriceQuery = (price) => {
  const sql = {
    text: 'SELECT * FROM products WHERE price= $1 ',
    values: [price]
  }

  return connection.query(sql)
}
const getProductByIdQuery = (productId) => {
  const sql = {
    text: 'SELECT * FROM products WHERE products.id= $1 ',
    values: [productId]
  }

  return connection.query(sql)
}


export {getProductByIdQuery, getProductByCategoryQuery, productQuery, getHomeProduct, getAllProductsQuery, filterProductsByPriceQuery, getProductsByTitleQuery }
