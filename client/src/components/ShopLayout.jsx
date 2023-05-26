import { useState } from 'react'
import Sidebar from './SideBar'
import { Outlet } from 'react-router'

function ShopLayout() {
  const [price, setPrice] = useState(0);
  const [title,setTitle] = useState('');
  return (
    <div>
      <Sidebar setPrice={setPrice} price={price} setTitle={setTitle} title={title}  />
      <Outlet context={[price,title]} />
    </div>
  )
}

export default ShopLayout
