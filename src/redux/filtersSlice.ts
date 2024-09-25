import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface FilterState {
  name: string;
}

const initialState: FilterState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = (state: RootState) => state.filters.name;

export default filtersSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: {
//     name: "",
//   },
//   reducers: {
//     changeFilter: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });

// export const { changeFilter } = filtersSlice.actions;

// export const selectNameFilter = (state) => state.filters.name;

// export default filtersSlice.reducer;
