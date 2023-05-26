import connection from '../config/connection.js'

const updateProductQuantityInCart = (userId, productId, quantity) => {
  const sql = {
    text: 'UPDATE productCart SET count = $3 WHERE cart_id = (SELECT id FROM cart WHERE user_id = $1) AND product_id = $2',
    values: [userId, productId, quantity]
  }

  return connection.query(sql)
}

export { updateProductQuantityInCart }
