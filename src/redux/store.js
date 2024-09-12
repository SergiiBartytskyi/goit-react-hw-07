import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contactsReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
