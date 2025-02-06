import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
export const fetchuser = createAsyncThunk("user/fetch",async()=>{
  const token = localStorage.getItem('token') 
    const response = await axios.get('http://localhost:8000/user',{
      headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    return response.data
})
const userSlice = createSlice({
  name: "usersdata",
  initialState: { userdata:null,loading:true,error:null},
  extraReducers:(builder)=>{
    builder
      .addCase(fetchuser.pending,(state)=>{
        state.loading = true;
        state.error = null
      })
      .addCase(fetchuser.fulfilled,(state,action)=>{
        state.loading = false;
        state.userdata = action.payload
      })
      .addCase(fetchuser.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message
      })
  }
});

// export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
