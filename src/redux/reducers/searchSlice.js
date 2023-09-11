import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: ''
    },
    reducers: {
        searchValue : (state,action) => {
            state.value = action.payload;
        }
    }
})

export const {searchValue} = searchSlice.actions;

export default searchSlice;
