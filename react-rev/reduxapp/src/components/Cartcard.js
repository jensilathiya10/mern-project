import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartData, fetchCartData } from "../cartSlice";



const Cartcard = ({ product }) => {
  console.log(product)
  return (
    <Card sx={{ display:'flex', flexDirection:'column', maxWidth: 345, m: 2, boxShadow: 3, borderRadius: 2 }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "cover" }}
      />

      {/* Product Details */}
      <CardContent sx={{flexGrow:1}}>
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
        <Button  size="small" variant="contained" color="primary" fullWidth>
        Remove
        </Button>
        <Button size="small" variant="outlined" color="secondary" fullWidth>
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cartcard;
