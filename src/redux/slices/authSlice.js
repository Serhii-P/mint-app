import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user:{
        userName:'Admin', 
        pass:'12345'
      }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false
    }
  }
})

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice;