import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "./productSlice";
import "./ProductList.css";
import Card from "./components/Card"
import "./style/Products.css";
const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const { products, status } = useSelector((state) => state.products);
  // console.log(status);
  // console.log(products)




  if (status != "success") {
    return <div>Loading...</div>;
  }
  else {
    return (
      <div>
        <div className="product_cards">
          {
            Object.values(products).map((product) => (
              <Card product={product} />
            ))
          }
        </div>
       

      </div>
    );
  }
};

export default ProductList;
