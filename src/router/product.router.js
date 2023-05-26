import express from 'express';
import { createProduct, homeProduct, filterProductsByPriceController, getProductByCategory, getAllProductsController, filterProductByName, getProductById } from '../controller/products/product.js'
import auth from '../utilis/auth/auth.js';


const productRouter = express.Router()

productRouter.get('/', homeProduct)
productRouter.get('/products', getAllProductsController)
productRouter.get('/allproducts/:price', filterProductsByPriceController)
productRouter.post('/product', auth, createProduct)
productRouter.get('/products/:title', filterProductByName)
productRouter.get('/product/:id', getProductById)
productRouter.get('/products/filter/:category', getProductByCategory)

export default productRouter
