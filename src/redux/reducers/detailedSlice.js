import { createSlice } from "@reduxjs/toolkit";

const detailedSlice = createSlice({
  name: "detailed",
  initialState: {
    activeSelect: 0,
  },
  reducers: {
    changeActiveSelect: (state, action) => {
      state.activeSelect = action.payload;
    },
  },
});

export const { changeActiveSelect } = detailedSlice.actions;

export default detailedSlice;
