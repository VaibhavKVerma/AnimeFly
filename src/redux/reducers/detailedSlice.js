import { createSlice } from "@reduxjs/toolkit";
import { actionConstant } from "../../Constants/Constants";

const detailedSlice = createSlice({
  name: actionConstant.detailed,
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
