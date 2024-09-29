// redux/filters/slice.js

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Експортуємо action creator
export const { changeFilter } = filtersSlice.actions;
// Експортуємо редюсер
export default filtersSlice.reducer;
