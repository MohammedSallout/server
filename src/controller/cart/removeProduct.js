import { removeProductFromCart } from '../../database/query/removeProductFromCart.js'

const removeCartController = async (req, res) => {
  const { id } = req.user
  const { productId } = req.params

  try {
    await removeProductFromCart(id, productId)
    res.json({ message: 'Item removed from cart successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { removeCartController }
