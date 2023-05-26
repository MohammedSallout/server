import express from 'express'
import { signupController, signIn } from '../controller/users/user.controller.js'

const userRouter = express.Router()

userRouter.post('/signup', signupController)

userRouter.post('/signin', signIn)

export default userRouter
