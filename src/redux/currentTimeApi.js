import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WORLD_TIME_API } from "../constants/Api";
import { timeApi } from "../constants/Constants";

export const currentTimeApi = createApi({
  reducerPath: timeApi,
  baseQuery: fetchBaseQuery({
    baseUrl: WORLD_TIME_API,
  }),
  endpoints: (builder) => ({
    getIPTime: builder.query({
      query: () => "ip",
    }),
  }),
});

export const { useGetIPTimeQuery } = currentTimeApi;