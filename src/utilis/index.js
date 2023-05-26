
import jwt from 'jsonwebtoken'
const generateAuthToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET)
}

export default generateAuthToken
