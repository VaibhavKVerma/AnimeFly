import { configureStore } from "@reduxjs/toolkit";
import { animeListApi } from "./redux/animeListApi";
import filterReducer from "./redux/reducers/filterReducer";
import detailedSlice from "./redux/reducers/detailedSlice";
import { currentTimeApi } from "./redux/currentTimeApi";

const store = configureStore({
  reducer: {
    [animeListApi.reducerPath]: animeListApi.reducer,
    [currentTimeApi.reducerPath]: currentTimeApi.reducer,
    filter: filterReducer,
    [detailedSlice.name]: detailedSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      animeListApi.middleware,
      currentTimeApi.middleware
    ),
});

export default store;
