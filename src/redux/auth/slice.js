
import { apiLoginUser, apiRegisterUser, apiRefreshUser, apiLogOut } from "../auth/operations";
import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState:{
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
    extraReducers: (builder) =>
      builder
    .addCase(apiRegisterUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
  
    .addCase(apiRegisterUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
  
    })
  
    .addCase(apiRegisterUser.rejected, (state, action) => {
      state.isLoading = false;
    state.error = action.payload;
    })

    .addCase(apiLoginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
  
    .addCase(apiLoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
  
    })
  
    .addCase(apiLoginUser.rejected, (state, action) => {
      state.isLoading = false;
    state.error = action.payload;
    })
    .addCase(apiLogOut.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(apiLogOut.fulfilled, (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(apiLogOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    .addCase(apiRefreshUser.pending, (state) => {
      state.isRefreshing = true;
    })
    .addCase(apiRefreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    .addCase(apiRefreshUser.rejected, (state) => {
      state.isRefreshing = false;
    })
  },
);


export const authReducer = authSlice.reducer;


