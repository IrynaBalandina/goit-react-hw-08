
import { apiLoginUser, apiRegisterUser } from "./operations";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  isLoading: false,
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};



const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,

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
  },
);


export const authReducer = authSlice.reducer;


