import express from 'express'
import userRouter from './user.router.js'
import productRouter from './product.router.js'
import cartRouter from './cart.router.js'
const router = express.Router()
router.use(userRouter)
router.use(productRouter)
router.use(cartRouter)
export default router
