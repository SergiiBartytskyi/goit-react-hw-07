import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Contact } from "./types/contacts";

axios.defaults.baseURL = "https://66e1652cc831c8811b54cdfa.mockapi.io";

export const fetchContacts = createAsyncThunk<
  Contact[],
  void,
  { rejectValue: string }
>("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = (await axios.get<Contact[]>("/contacts")).data;
    return response;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk<
  Contact,
  Contact,
  { rejectValue: string }
>("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const response = (await axios.post<Contact>("/contacts", contact)).data;
    return response;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const deleteContact = createAsyncThunk<
  Contact,
  string,
  { rejectValue: string }
>("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    const response = (await axios.delete<Contact>(`/contacts/${contactId}`))
      .data;
    return response;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://66e1652cc831c8811b54cdfa.mockapi.io";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = (await axios.get("/contacts")).data;
//       return response;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (contact, thunkAPI) => {
//     try {
//       const response = (await axios.post("/contacts", contact)).data;
//       return response;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const response = (await axios.delete(`/contacts/${contactId}`)).data;
//       return response;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
