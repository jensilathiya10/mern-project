import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice'
const store = configureStore({
  reducer: {
    users: userReducer,
    products: productReducer,
    cart:cartReducer
  },
});

export default store;
