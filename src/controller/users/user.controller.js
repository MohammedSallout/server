
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { signupQuery, signInQuery } from '../../database/query/user.query.js'
import { signupSchema, signInSchema } from '../../utilis/validation/schema.js'

const signupController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    const role = false

    const value = await signupSchema.validateAsync({ username, email, password }, { abortEarly: false })

    if (value) {
      const hashedPassword = await bcrypt.hash(password, 10)
      if (hashedPassword) {
        const data = await signupQuery({ username, email, password: hashedPassword, role })

        res.status(201).json({
          message: 'this user has been created successfully'
        })
      } else {
        res.status(404).json({
          message: 'there is no password'
        })
      }
    } else {
      res.status(404).json({
        message: 'there is a mistake'
      })
    }
  } catch (error) {
    console.log(error)
    res.status(404).json({
      message: error.message
    })
  }
}

const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const value = await signInSchema.validateAsync({ username, password }, { abortEarly: false })

    if (value) {
      const { rows } = await signInQuery({ username })
      if (rows.length > 0) {
        const match = await bcrypt.compare(password, rows[0].password)
        if (match) {
          const token = jwt.sign(rows[0].id, process.env.JWT_SECRET)
          res.cookie('token', token).json({
            message: 'User logged in successfully',
            token,
            user: rows[0]
          })
        } else {
          res.status(400).json({
            message: 'password or username is not correct'
          })
        }
      } else {
        res.status(400).json({
          message: 'password or username is not correct'

        })
      }
    }
  } catch (error) {
    res.status(400).json({
      message: error
    })
  }
}

export { signupController, signIn }
