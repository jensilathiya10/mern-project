import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice'
import authReducer from './authSlice';
const store = configureStore({
  reducer: {
    users: userReducer,
    products: productReducer,
    cart:cartReducer,
    auth:authReducer,
  },
});

export default store;
