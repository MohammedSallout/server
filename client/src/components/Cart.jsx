import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/cart.css';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const fetchCartProducts = async () => {
    try {
      const response = await axios.get('/api/cart');
      setCartItems(response.data.rows);
    } catch (error) {
      console.error('Error fetching cart products:', error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await axios.delete(`/api/deletecart/${productId}`);
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.product_id !== productId)
      );
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      await axios.put(`/api/updateQuantity/${productId}`, { quantity });
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => {
          if (item.product_id === productId) {
            return { ...item, count: quantity };
          }
          return item;
        })
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };


  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    return totalPrice;
  };

  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className='cart-table' >
          <thead>
            <tr className='cart-header' >
              <th className='cart-header-item'>Product</th>
              <th className='cart-header-item'>Product-title</th>
              <th className='cart-header-item'>Price</th>
              <th className='cart-header-item'>Quantity</th>
              <th className='cart-header-item'>Remove</th>
            </tr>

            {cartItems.map((item) => (
              <tr className='cart-item' key={item.product_id}>
                <td  className='cart-item-image'><img src={item.image} alt={item.title} /></td>
                <td className='cart-item-name'>{item.title}</td>
                <td className='cart-item-price'> ${item.price}</td>
                <td className='cart-item-quantity'>
                  <input
                    type="number"
                    min="1"
                    value={item.count}
                    onChange={(e) => handleUpdateQuantity(item.product_id, e.target.value)}
                    className='input-cart'
                  />
                  </td>

                  <td className='cart-item-remove'><button onClick={() => handleRemoveFromCart(item.product_id)} className='remove-button'>remove</button></td>

                  </tr> 
            ))}
          </thead>

          <h2 className='cart-total-price'>Total Price : $ {getTotalPrice()}</h2>
        </table>
      )}
    </div>
  );
};

export default CartPage;
