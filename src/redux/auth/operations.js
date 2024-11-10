
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const contactsAPI = axios.create({
    baseURL: "https://connections-api.goit.global/",
   
  });
  export const setAuthToken = (token) => {
    contactsAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  export const apiRegisterUser = createAsyncThunk(
    "auth/registerUser",
    async (formData, thunkApi) => {

      try {
        const { data } = await contactsAPI.post("/users/signup", formData);
      
        setAuthToken(data.token)
        console.log("data: ", data);
  
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
        console.log("data: ", data);
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
  