import { updateProductQuantityInCart } from '../../database/query/updateProductInCart.js'

const updateQuantityController = async (req, res) => {
  const { id } = req.user
  const { productId } = req.params
  const { quantity } = req.body

  try {
    await updateProductQuantityInCart(id, productId, quantity)
    res.json({ message: 'Quantity updated successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { updateQuantityController }
