import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCartData, fetchCartData } from './cartSlice';
import { Alert, Box, Button, CardActions, IconButton, Snackbar, Typography } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [quantity,setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
    dispatch(fetchCartData())
  }, [id, dispatch]);

  const { cartProducts, status } = useSelector((state) => state.cart)

  var selectedproduct;
  if (cartProducts && status == "success") {
    console.log(cartProducts)
    selectedproduct = cartProducts.cartdata.find(item =>{
      return item.product._id == id
    } )
  }

  const handleRemove = () => {
    setQuantity(x=>x-1);
  }
  const handleAdd = () => {
    setQuantity(x=>x+1);
  }

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
      await dispatch(addCartData({product:product._id,quantity:quantity}))
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

  if (!product || status != "success") {
    return <p>Loading product details...</p>;
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt="" width={300} />
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
            disabled={quantity <= 1}
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1" sx={{ mx: 1 }}>
            {quantity}
          </Typography>
          <IconButton onClick={handleAdd} color="primary">
            <AddIcon />
          </IconButton>
        </Box>
      </CardActions>

      <Button onClick={() => addtocart()} size="small" variant="contained" color="primary" fullWidth>
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
