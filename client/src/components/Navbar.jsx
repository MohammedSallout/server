import { Link } from "react-router-dom"
import '../style/navbar.css'
function Navbar() {
  const auth = JSON.parse(localStorage.getItem('user'))
  return (
    <nav className="Navbar">
      <h1 className="logo">AMH Store</h1>
      <ul className="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="products">Shop</Link></li>
        {auth?.admin && <li><Link to="seller">Seller</Link></li> }
      </ul>
      <div className="side">
        <Link to="signin" className="login">
          <i className="fa-regular fa-circle-user"></i>
        </Link>
        <Link to="/cart" className="cart">
          <i className="fa-brands fa-shopify"></i>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
