import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
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
          <ShoppingCartIcon/>
        </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
  