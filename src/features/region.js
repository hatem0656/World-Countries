import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "All";

export const regionSlice = createSlice({
  name: "region",
  initialState: { value: initialStateValue },
  reducers: {
    setRegion: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRegion } = regionSlice.actions;

export default regionSlice.reducer;
