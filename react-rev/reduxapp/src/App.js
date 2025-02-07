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
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App;



