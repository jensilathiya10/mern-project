import React, { useState } from 'react';
import "./Addproduct.css";
import axios from "axios";
const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
    modelsfor: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleModelsChange = (e) => {
    const { value } = e.target;
    setFormData({   
      ...formData,
      modelsfor: value.split(','),
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
        // Send the form data as a JSON POST request
        const response = await axios.post('http://localhost:8000/products', formData, {
          headers: {
            'Content-Type': 'application/json',  // Ensure content type is JSON
          },
        });
  
        // Handle server response
        console.log('Product uploaded successfully:', response);
      } catch (error) {
        console.error('Error uploading product:', error);
      }
    // Here you can handle the form submission like sending data to an API.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter product title"
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter product description"
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter product price"
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter product category"
        />
      </div>
      <div>
        <label>Models (comma-separated):</label>
        <input
          type="text"
          name="modelsfor"
          value={formData.modelsfor.join(',')}
          onChange={handleModelsChange}
          placeholder="Enter supported models"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
