import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "./productSlice";
import "./ProductList.css";
import Card from "./components/Card"
import "./style/Products.css";
import { Card as Uicard, CardContent, Typography, Grid, Paper, Box } from "@mui/material";
import apple from './images/apple.png';
import BrandFilter from './BrandFilter';
const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategory = (category) => {
    setSelectedcat(category)
  }

  const { products, status } = useSelector((state) => state.products)
  console.log(products)
  // console.log(state)
  const [selectedcat, setSelectedcat] = new useState("");

  var data = Object.values(products).filter(x => x.category === selectedcat)
  if (selectedcat === "") {
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
      <div style={{ backgroundColor: "#fffbf5" }}>

        <Grid container spacing={2} sx={{ padding: "10px" }}>

          {distinctCategories.map((category, index) => (
            <Grid item xs={12} sm={8} md={2} key={index}>
              <Uicard
                elevation={4}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
                onClick={() => handleCategory(category)}
              >
                <CardContent sx={{ padding: "10px 0px", paddingBottom: "10px !important" }}>
                  <img
                    src={apple}
                    alt={`${category} logo`}
                    style={{ width: 40, height: 40 }}
                  />
                  <Typography variant="h6" sx={{ fontFamily: "Poppins" }}>{category}</Typography>
                </CardContent>
              </Uicard>

            </Grid>
          ))}
        </Grid>

        <Box sx={{display:"flex",ml:2}}>
          <Paper sx={{borderRadius:"20px",height:"fit-content",padding:"10px"}}>
            <BrandFilter />
          </Paper>

          <div className="product_cards">
            {
              data.map((product) => (
                <Card product={product} />
              ))
            }
          </div>
        </Box>


      </div>
    );
  }
};

export default ProductList;
