import connection from '../config/connection.js'

const getTotalPrice = (userId) => {
  const sql = {
    text: 'SELECT SUM(p.price * pc.count) AS total_price FROM productCart pc JOIN products p ON pc.product_id = p.id WHERE pc.user_id = $1',
    values: [userId]
  }

  return connection.query(sql)
}

export { getTotalPrice }
