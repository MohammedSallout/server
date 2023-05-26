import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/details.css';
import '../style/seller.css';

function Details({ product }) {
  const [cartItems, setCartItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const token = document.cookie.split('=')[[1]];


  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('/api/cart');
      setCartItems(response.data.rows);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async () => {
    const existingItem = cartItems.find((item) => item.product_id === product.id);
    if (existingItem) {
      setShowMessage(true);
      return;
    }

    try {
      await axios.post(`/api/cart/${product.id}`);
      fetchCartItems();
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="details">
      <div className="card_image">
        <img src={product.image} alt="product" />
      </div>

      <div className="card_content">
        <div className="card_title">
          <h1><span>product name: </span>{product.title}</h1>
          <h2><span>price :</span> $ {product.price}</h2>
        </div>

        <div className="card_description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <div className="card_btn">
          <button onClick={token && addToCart }>Add to cart</button>
        </div>

        {showMessage && (
          <p style={{ color: 'red' }}>This product is already in your cart. Quantity cannot be edited.</p>
        )}
      </div>
    </div>
  );
}

export default Details;
