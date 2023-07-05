import { configureStore } from "@reduxjs/toolkit";
import { animeListApi } from "./redux/animeListApi";
import filterReducer from "./redux/reducers/filterReducer";
import detailedSlice from "./redux/reducers/detailedSlice";

const store = configureStore({
  reducer: {
    [animeListApi.reducerPath]: animeListApi.reducer,
    filter: filterReducer,
    [detailedSlice.name]:detailedSlice.reducer 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeListApi.middleware),
});

export default store;
