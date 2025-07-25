import React, { useState } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Snackbar, Alert, Box } from "@mui/material";
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
      await dispatch(addCartData({product:product._id,quantity:1}))
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

      <Card sx={{ display: 'flex', flexDirection: 'column', minWidth: '250px',flex: '1 1 calc((100% - 48px) / 4)', maxWidth: '300px', m: 2, boxShadow: 3, borderRadius: 2, 
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)', // animatable
      boxShadow: 6,             // animatable
    } }}>
        {/* Product Image */}
        <CardMedia
          component="img"
          height="200"
          image={`http://localhost:8000/${product.image[0].replace(/\\/g, '/')}`}
          alt={product.title}
          sx={{ objectFit: "cover" }}
        />

        {/* Product Details */}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {product.title.substring(0,30)}...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.substring(0,80)}......
          </Typography>
        </CardContent>

        {/* Actions (Buttons) */}
        <Box>
          <Typography variant="h6" sx={{ ml:2 , fontWeight: "bold", color: "000000a6" }}>
            ${product.price}
          </Typography>
     
        <CardActions>
          {product.hasModels != "yes" && <Button onClick={() => addtocart()} size="small" variant="contained" sx={{backgroundColor:"#e29f4d"}} fullWidth>
            Add to Cart
          </Button>}
          <Button onClick={()=>viewmore()} size="small" variant="contained" sx={{borderColor:"#e29f4d",color:"#ffffffff",backgroundColor:"#d0aa7bff"}} fullWidth>
            View More
          </Button>
        </CardActions>
           </Box>
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
