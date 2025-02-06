import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await axios.get('http://localhost:8000/products');
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.rejected, (state, action) => {
      console.log("error");
      // state.products = action.payload;
      state.status = 'loading';
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = 'success';
    });
  },
});

export default productSlice.reducer;