import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "./productSlice";
import "./ProductList.css";
import Card from "./components/Card"
import "./style/Products.css";
import { Card as Uicard, CardContent, Typography, Grid } from "@mui/material";
const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategory = (category) =>{
    setSelectedcat(category)
  }

  const {products,status} = useSelector((state) => state.products)
  console.log(products)
  const [selectedcat,setSelectedcat] = new useState("");

  var data = Object.values(products).filter(x=>x.category===selectedcat)
  if(selectedcat===""){
    data = products
  }
  
  const distinctCategories = products
  .map((item) => item.category)
  .filter((value, index, self) => self.indexOf(value) === index);

// console.log(distinctCategories);
  if (status !== "success") {
    return <div>Loading...</div>;
  }
  else {
    return (
      <div>

        <Grid container spacing={2} sx={{padding:"10px"}}>
          {distinctCategories.map((category, index) => (
            <Grid item xs={12} sm={8} md={2} key={index}>
              <Uicard 
                elevation={4}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "12px",
                  textAlign: "center"
                }}
                onClick={()=>handleCategory(category)}
              >
                <CardContent >
                  <Typography variant="h6">{category}</Typography>
                </CardContent>
              </Uicard>
            </Grid>
          ))}
        </Grid>

        
        <div className="product_cards">
          {
            data.map((product) => (
                <Card product={product} />  
            ))
          }
        </div>


      </div>
    );
  }
};

export default ProductList;
