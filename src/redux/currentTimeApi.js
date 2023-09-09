import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currentTimeApi = createApi({
  reducerPath: "timeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://worldtimeapi.org/api/",
  }),
  endpoints: (builder) => ({
    getIPTime: builder.query({
      query: () => "ip",
    }),
  }),
});

export const { useGetIPTimeQuery } = currentTimeApi;