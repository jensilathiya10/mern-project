import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        
        <Box>
          <Button color="inherit" component={Link} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit" component={Link} to="/products">Products</Button>

          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
  