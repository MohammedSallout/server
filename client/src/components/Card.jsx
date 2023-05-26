import "../style/card.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="products-container">
      <div key={product.id} className="product-card">
        <div className="product-image">
          <img src={product.image} />
        </div>
        <div className="product-title">
          <Link to={`/product/` + product.id}>
            <h2>{product.title}</h2>
          </Link>
        </div>

        <div className="product-price">
          <p style={{ color: "green" }}>${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
