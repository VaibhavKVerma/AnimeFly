import { createAction, createReducer } from "@reduxjs/toolkit";
import { topAnimeFilter } from "../../constants/Constants";

export const filterAction = createAction("getTopAnime/filter");

const INITIAL_STATE = { type: topAnimeFilter[0].key };

const filterReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(filterAction, (state, action) => {
    state.type = action.payload;
  });
});

export default filterReducer;
