import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const searchSlice = createSlice({
  name: "search",
  initialState: { value: initialStateValue },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
