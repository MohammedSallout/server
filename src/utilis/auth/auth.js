import { getUserData } from '../../database/query/user.query.js'
import jwt from 'jsonwebtoken'
import {} from 'dotenv/config'

const auth = async (req, res, next) => {
  try {
    const accessToken = req.cookies.token
    if (!accessToken) {
      return res.status(401).json({
        message: 'You are not authorized to access this route'
      })
    }

    const userId = jwt.verify(accessToken, process.env.JWT_SECRET)
    const data = await getUserData({ userId })

    req.user = {
      id: data.rows[0].id
    }

    next()
  } catch (error) {
    next(error)
  }
}

export default auth
