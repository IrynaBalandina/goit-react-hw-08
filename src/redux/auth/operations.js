
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const contactsAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

  export const setAuthToken = (token) => {
    contactsAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  const clearAuthToken= () => {
    contactsAPI.defaults.headers.common.Authorization = '';
  };

  export const apiRegisterUser = createAsyncThunk(
    "auth/registerUser",
    async (formData, thunkApi) => {

      try {
        const { data } = await contactsAPI.post("/users/signup", formData);
      
        setAuthToken(data.token)
   
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
  export const apiLoginUser = createAsyncThunk(
    "auth/loginUser",
    async (formData, thunkApi) => {
      
      try {
        const { data } = await contactsAPI.post("/users/login", formData);
        
        setAuthToken(data.token)
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
    await contactsAPI.post('/users/logout');
      clearAuthToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });

  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkApi.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthToken(persistedToken);
        const { data} = await contactsAPI.get('/users/current');
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
  
  