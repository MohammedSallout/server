
import SignUp from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Seller from './pages/seller'
import CartPage from './pages/CartPage'
import SignIn from './pages/Signin';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Layout from './components/Layout';
import ShopLayout from './components/ShopLayout';
import Category from './pages/Category';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="products" element={<ShopLayout />} >
          <Route index element={<Shop />} />
          <Route path=':category' element={<Category />} />
          </Route>
          <Route path="/seller" element={<Seller />} />
          <Route path="/cart" element={<CartPage />} />
         </Route>
         </Routes>

    </div>
  );
}

export default App
