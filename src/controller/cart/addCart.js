import { addProductToCart } from '../../database/query/addProductToCart.js'

const addCartController = async (req, res) => {
  const { id } = req.user
  const { productId } = req.params
  const count = 1

  try {
    const data = await addProductToCart(id, productId, count)
    res.json({ message: 'Item added to cart successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { addCartController }
