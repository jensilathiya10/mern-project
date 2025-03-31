import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { useEffect } from "react";
 import {Badge } from "@mui/material";
 import { useNavigate } from "react-router-dom";
 import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
 import IconButton from "@mui/material/IconButton";
 import { useDispatch, useSelector } from "react-redux";
 import { fetchCartData } from "../cartSlice";
import { isAuthenticated } from '../services/auth';
import { fetchuser } from '../userSlice';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuth} = useSelector(
    (state) => state.auth
  );

  useEffect(()=>{
    dispatch(fetchCartData())
    if (isAuth) {
      dispatch(fetchuser());
    }
  },[dispatch,isAuthenticated()])  

  // const isUserAuthenticated = userdata !== null;
  // console.log(userdata)

  const { cartProducts, status } = useSelector((state)=>state.cart)
  let count = 0
  // console.log(cartProducts,status)

  if(status == "success" && isAuthenticated()){
    count = cartProducts.cartdata.length
  }
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Register', path: '/register' },
    { name: 'Products', path: '/products' },  
    { name: isAuthenticated()?'Logout':'Login', path: isAuthenticated()? '/logout':'/login' }
    // { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Everbloom</Link>

        <ul className="navbar-links">
          {navLinks.map((link, index) => (
            <li key={index} className="navbar-link">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Icon Buttons */}
        <div className="navbar-icons">
          <button className="navbar-icon">🔍</button>
          <button className="navbar-icon">👤</button>
          <IconButton
           edge="end"
           color="inherit"
           aria-label="cart"
           onClick={()=>navigate('/cart')}>
            <Badge badgeContent={count} color="error">
               <ShoppingCartIcon />
             </Badge>
             </IconButton>
      
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navbar-mobile-menu">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path}
                className="navbar-mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;