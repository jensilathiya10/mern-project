import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCartData, addQuantity, fetchCartData, removeCartData } from './cartSlice';
import { Alert, Box, Button, CardActions, IconButton, Snackbar, Typography } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
       dispatch(fetchCartData())

  }, [id,dispatch]);
  const { cartProducts, status } = useSelector((state) => state.cart)
  console.log(cartProducts)
  // const dispatch = useDispatch();
  if(cartProducts){
    console.log(cartProducts.cartdata)
    const cart = Object.values(cartProducts).filter(x=>x)
    const selectedproduct = Object.values(cart).filter(x=>x)
    console.log(selectedproduct)
  }
   
    const handleRemove = () => {
      dispatch(removeCartData(product.product._id))
        .then(() => dispatch(fetchCartData()))
    }
    const handleAdd = () => {
      dispatch(addQuantity(product._id))
        .then(() => dispatch(fetchCartData()))
    }
  

  // console.log(product)
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotification({ ...notification, open: false });
  };
 
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success", // Can be "success", "error", "warning", or "info"
  });

  const addtocart = async () => {
    
    try {
      await dispatch(addCartData(product._id))
      setNotification({
        open: true,
        message: `Product added to cart!`,
        severity: "success",
      });
      dispatch(fetchCartData())
    } catch (error) {
      setNotification({
        open: true,
        message: `Error! Please Try Again`,
        severity: "error",
      });
    }
  }
  console.log(product)
  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Button onClick={() => addtocart()} size="small" variant="contained" color="primary" fullWidth>
        Add to Cart
      </Button>
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={notification.severity} sx={{ width: "100%" }}>
          {notification.message}
        </Alert>
      </Snackbar>
      <CardActions>
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <IconButton
            onClick={handleRemove}
            color="secondary"
            disabled={product.quantity <= 0} // Disable if quantity is 1
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1" sx={{ mx: 1 }}>
            {product.quantity}
          </Typography>
          <IconButton onClick={handleAdd} color="primary">
            <AddIcon />
          </IconButton>
        </Box>
      </CardActions>
    </div>
  );
};

export default Product;
