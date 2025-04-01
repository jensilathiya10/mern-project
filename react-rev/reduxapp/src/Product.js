import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCartData, addQuantity, fetchCartData, removeCartData } from './cartSlice';
import { Alert, Box, Button, CardActions, IconButton, Snackbar, Typography } from '@mui/material';
import "./productslice.css";
import modelPink from './images/5.jpg';


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
    dispatch(fetchCartData());
  }, [id, dispatch]);


  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setNotification({ ...notification, open: false });
  };

  const addtocart = async () => {
    try {
      console.log(quantity)
      await dispatch(addCartData({product:product._id,quantity:quantity}))
      setNotification({ open: true, message: `Product added to cart!`, severity: "success" });
      dispatch(fetchCartData());
    } catch (error) {
      setNotification({ open: true, message: `Error! Please Try Again`, severity: "error" });
    }
  };

  const increaseQuantity = () => {
    setQuantity(x=>x+1);
  };

  const decreaseQuantity = () => {
    setQuantity(x=>x-1);
  };

  const toggleWishlist = () => {
    setIsWishlisted(prev => !prev);
  };

  if (!product) return <p>Loading product details...</p>;

  return (
    <div>
     
      
      <div className="product-page">
        <div className="product-container">
          <div className="back-button"><span>&#8249; Back</span></div>
          <div className="product-details">
            <div className="product-image-container">
              <img src={modelPink} alt="Product" className="product-image" />
            </div>
            <div className="product-info">
              <h1>{product.title}</h1>
              <div className="product-price">${product.price}</div>
              <div className="product-description">{product.description}</div>

              <div className="product-options">
                <div className="option-row">
                  <div className="dropdown">
                    <div className="dropdown-header">
                      <span>Model</span>
                      <span className="dropdown-arrow">&#9660;</span>
                    </div>
                  </div>

                  <div className="dropdown">
                    <div className="dropdown-header">
                      <span>Color</span>
                      <span className="dropdown-arrow">&#9660;</span>
                    </div>
                  </div>
                </div>

              <div className="quantity-row">
                <div className="quantity-selector">
                  <div className="quantity-display">{quantity.toString().padStart(2, "0")}</div>
                  <div className="quantity-controls">
                    <button className="quantity-button" onClick={increaseQuantity}>&#9650;</button>
                    <button className="quantity-button" onClick={decreaseQuantity}>&#9660;</button>
                  </div>
                </div>
              </div>
              <div className="wishlist-row" onClick={toggleWishlist}>
                <div className={`wishlist-icon ${isWishlisted ? "wishlisted" : ""}`}>
                  {isWishlisted ? "♥" : "♡"}
                </div>
                <Button onClick={addtocart} size="small" variant="contained" color="primary" fullWidth>
        Add to Cart
      </Button><Snackbar open={notification.open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleClose} severity={notification.severity} sx={{ width: "100%" }}>
          {notification.message}
        </Alert>
      </Snackbar>
             <br/>
      <div className="shipping-info">FREE SHIPPING ON ORDERS 50 USD</div>
              </div>
</div></div></div></div></div></div>
   
  );
};

export default Product;