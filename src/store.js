import { configureStore } from "@reduxjs/toolkit";
import { animeListApi } from "./redux/animeListApi";
import filterReducer from "./redux/reducers/filterReducer";
import detailedSlice from "./redux/reducers/detailedSlice";
import { currentTimeApi } from "./redux/currentTimeApi";
import searchSlice from "./redux/reducers/searchSlice";
import { brandLogoApi } from "./redux/logoApi";

const store = configureStore({
  reducer: {
    [animeListApi.reducerPath]: animeListApi.reducer,
    [currentTimeApi.reducerPath]: currentTimeApi.reducer,
    [brandLogoApi.reducerPath]: brandLogoApi.reducer,
    filter: filterReducer,
    [detailedSlice.name]: detailedSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      animeListApi.middleware,
      currentTimeApi.middleware,
      brandLogoApi.middleware
    ),
});

export default store;
