import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import fetchReducer from './productSlice';
const store = configureStore({
  reducer: {
    users: userReducer,
    products: fetchReducer
  },
});

export default store;
