import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WORLD_TIME_API } from "../Constants/Api";
import { actionConstant } from "../Constants/Constants";

export const currentTimeApi = createApi({
  reducerPath: actionConstant.timeApi,
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