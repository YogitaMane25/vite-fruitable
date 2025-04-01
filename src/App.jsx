import React from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ShopDetail from './components/ShopDetail';
import Contact from './components/Contact';
import Cart from './components/Cart';
import CheackOut from './components/CheckOut';
import Page from './components/Page';
import AdminLogin from './components/Admin/AdminLogin';
import Products from './components/Admin/Products';
import AddProduct from './components/Admin/AddProduct';
import AdminSidebarS from './components/Admin/AdminSidebar';


import AdminDashboard from './components/Admin/AdminDashboard';
import AdminSidebar from './components/Admin/AdminSidebar';
function App() {
  return (
    <>
      {/* <Header/>
    <Home/>
    <Shop/> */}
      {/* <ShopDetail/> */}
      {/* <Contact/> */}
      {/* <Cart/> */}
      {/* <CheackOut/> */}
      {/* <Page/> */}
      {/* <AdminLogin/> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopDetail" element={<ShopDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheackOut />} />
          <Route path="/page" element={<Page />} />
          <Route path="/404" element={<Page/>}/>
        
          <Route path="/adminlogin" element={<AdminLogin />} />

          {/* Admin Routes - Nested Correctly */}
          <Route path="/admin" element={<AdminSidebar />}>
            <Route index element={<AdminDashboard />} /> {/* This shows on `/admin` */}
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;