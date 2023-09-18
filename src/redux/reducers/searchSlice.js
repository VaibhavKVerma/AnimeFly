import { createSlice } from "@reduxjs/toolkit";
import { actionConstant } from "../../Constants/Constants";

const searchSlice = createSlice({
  name: actionConstant.search,
  initialState: {
    value: "",
    hide: true,
  },
  reducers: {
    searchValue: (state, action) => {
      state.value = action.payload;
    },
    showInfo: (state) => {
      state.hide = false;
    },
    hideInfo: (state) => {
      state.hide = true;
    },
  },
});

export const { searchValue, showInfo, hideInfo } = searchSlice.actions;

export default searchSlice;
