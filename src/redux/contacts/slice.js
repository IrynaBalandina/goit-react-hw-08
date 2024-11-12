import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts,addContact, deleteContact } from "../contacts/operations";



const INITIAL_STATE = {
items: null,
  isLoading: false,
  error: null,
};


const contactsSlice = createSlice({
  name:"contacts", 
initialState:INITIAL_STATE,

extraReducers: (builder) =>
  builder
.addCase(fetchContacts.pending, state => {
  state.isLoading = true;
  state.error = null;
})
.addCase(fetchContacts.fulfilled, (state, action) => {
  state.isLoading = false;
        state.error = null;
        state.items = action.payload;
})
.addCase(fetchContacts.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
})
.addCase(addContact.pending, state => {
  state.isLoading = true;
  state.error = null;
})
.addCase(addContact.fulfilled, (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
})
.addCase(addContact.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
})
.addCase(deleteContact.pending, state => {
  state.isLoading = true;
  state.error = null;
})
.addCase(deleteContact.fulfilled, (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id);
})
.addCase(deleteContact.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
})

});


export const contactsReducer = contactsSlice.reducer;
