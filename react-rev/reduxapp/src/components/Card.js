import React, { useState } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartData, fetchCartData } from "../cartSlice";


const ProductCard = ({ product }) => {
   const navigate = useNavigate();

  const dispatch = useDispatch()
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

  const viewmore = ()=>{
      navigate(`/products/${product._id}`)
  }

  return (
    <>

      <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345, m: 2, boxShadow: 3, borderRadius: 2 }}>
        {/* Product Image */}
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "cover" }}
        />

        {/* Product Details */}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold", color: "primary.main" }}>
            ${product.price}
          </Typography>
        </CardContent>

        {/* Actions (Buttons) */}
        <CardActions>
          <Button onClick={() => addtocart()} size="small" variant="contained" color="primary" fullWidth>
            Add to Cart
          </Button>
          <Button onClick={()=>viewmore()} size="small" variant="outlined" color="secondary" fullWidth>
            View More
          </Button>
        </CardActions>
      </Card>
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
    </>
  );
};

export default ProductCard;
