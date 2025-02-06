import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";
function Login() {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const navigate = useNavigate();

  // redirect to home page if user is already logged in
  useEffect(()=>{
    const token = localStorage.getItem('token')
    console.log(token)
    if(token) {
      navigate("/")
    }
  })
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/login', { name, roll })
      const token = res.data.token
      console.log(token)
      localStorage.setItem('token', token)
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }

  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form> */}
      <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            required
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  
    </div>
  );
}

export default Login