import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { animeListApi } from "./redux/animeListApi";
import { Provider } from "react-redux";
import filterReducer from "./redux/reducers/filterReducer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import DetailedData from "./components/DetailedData";

const store = configureStore({
  reducer: {
    [animeListApi.reducerPath]: animeListApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeListApi.middleware),
});

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/anime/:id",
        element: <DetailedData />,
        loader: ({params}) => {
          return params.id;
        }
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
