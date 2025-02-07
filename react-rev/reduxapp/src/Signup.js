import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    roll: "",
    class: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const uname = formData.username
    const roll = formData.roll
    const classe = formData.class
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:8000/signup', {uname,roll,classe})
        if(res.status===200){
            navigate("/")
        }
        else{
            console.log(res.status)
        }
      } catch (error) {
        console.log(error.message)
      }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            fullWidth
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Roll"
            type="number"
            name="roll"
            value={formData.roll}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="class"
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
