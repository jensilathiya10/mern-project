import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box,Badge } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../cartSlice";
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])
  const { cartProducts, status } = useSelector((state)=>state.cart)
  let count = 0
  if(status == "success"){
    count = cartProducts.cartdata.length
  }
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit" component={Link} to="/products">Products</Button>
          <IconButton
          edge="end"
          color="inherit"
          aria-label="cart"
          onClick={()=>navigate('/cart')}
        >
          <Badge badgeContent={count} color="error">
              <ShoppingCartIcon />
            </Badge>
        </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
  