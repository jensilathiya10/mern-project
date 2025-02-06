import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "./productSlice";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const { products, status } = useSelector((state) => state.products);
  console.log(status);
  console.log(products)

  if (status != "success") {
    return <div>Loading...</div>;
  }
  else {
    return (
      <div>
        <div className="product-container">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
         
      </div>
    );
  }
};

export default ProductList;
