import connection from '../config/connection.js'

const signupQuery = ({ username, email, password, role }) => {
  const userSql = {
    text: `INSERT INTO users (username, email, password, admin)
    VALUES ($1, $2, $3, $4)
    RETURNING id, username, email, admin`,
    values: [username, email, password, role]
  }

  const cartSql = {
    text: `INSERT INTO cart (user_id)
    VALUES (currval('users_id_seq'))
    RETURNING id AS cart_id`
  }

  return connection.query(userSql)
    .then(userResult => {
      const userId = userResult.rows[0].id
      return connection.query(cartSql)
        .then(cartResult => {
          const cartId = cartResult.rows[0].cart_id
          return {
            id: userId,
            username: userResult.rows[0].username,
            email: userResult.rows[0].email,
            admin: userResult.rows[0].admin,
            cart_id: cartId
          }
        })
    })
}

const signInQuery = ({ username }) => {
  const sql = {
    text: 'SELECT * FROM users WHERE username = $1',
    values: [username]
  }
  return connection.query(sql)
}

const getUserData = ({ userId }) => {
  const sql = {
    text: 'SELECT * FROM users WHERE users.id = $1',
    values: [userId]
  }
  return connection.query(sql)
}

export { signupQuery, signInQuery, getUserData }
