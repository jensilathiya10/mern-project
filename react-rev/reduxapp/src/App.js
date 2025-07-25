import './App.css';
import { useState } from 'react';
import Login from './Login';
import Home from './Home';
import About from './About';
import ProductList from "./ProductList";
import Product from "./Product";
import { Route, BrowserRouter, Routes, Router } from 'react-router-dom';
import PrivateRoute from './services/PrivateRoute';
import Navbar from './utils/nav';
import Cart from './Cart';
import Signup from './Signup';
import Logout from './Logout';
import Addproduct from "./admin/Addproduct"
import ScrollToTop from './ScrollToTop';
import Contact from './Contact';
import MobileBrands from './admin/MobileBrands';
import Products from './admin/Products';
function App() {
  return (
    <BrowserRouter>
        <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admin/addproduct" element={<Addproduct/>}/>
        <Route path="/admin/addbrand" element={<MobileBrands/>}/>
        <Route path="/admin/products" element={<Products/>}/>


      </Routes>
    </BrowserRouter>
  )

}

export default App;



