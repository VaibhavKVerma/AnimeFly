import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BRAND_FETCH_API_V2 } from "../Constants/Api";
import { actionConstant } from "../Constants/Constants";

export const brandLogoApi = createApi({
  reducerPath: actionConstant.logoApi,
  baseQuery: fetchBaseQuery({
    baseUrl: BRAND_FETCH_API_V2,
  }),
  endpoints: (builder) => ({
    getBrandLogo: builder.query({
      query: (param) => `search/${param}`,
    }),
  }),
});

export const { useGetBrandLogoQuery } = brandLogoApi;
