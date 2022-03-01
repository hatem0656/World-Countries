import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = null;

export const countriesSlice = createSlice({
  name: "countries",
  initialState: { value: initialStateValue },
  reducers: {
    setCountries: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
