import connection from '../config/connection.js'

const removeProductFromCart = (userId, productId) => {
  const sql = {
    text: 'DELETE FROM productCart WHERE cart_id IN (SELECT id FROM cart WHERE user_id = $1) AND product_id = $2',
    values: [userId, productId]
  }

  return connection.query(sql)
}

export { removeProductFromCart }
