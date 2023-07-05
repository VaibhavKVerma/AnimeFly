import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeListApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jikan.moe/v4/",
  }),
  endpoints: (builder) => ({
    getTopAnime: builder.query({
      query: (filter) => {
        let query = "top/anime";
        if (filter && filter.length > 0) query += `?filter=${filter}`;
        return query;
      },
    }),
    getSchedules: builder.query({
      query: (filter) => `schedules?filter=${filter}`,
    }),
    getAnimeFullById: builder.query({
      query: (id) => `anime/${id}/full`
    }),
    getAnimeRecommendationsById: builder.query({
      query: (id) => `anime/${id}/recommendations`
    }),
    getAnimeRelationsById: builder.query({
      query: (id) => `anime/${id}/relations`
    }),
    getPicturesById: builder.query({
      query: (info) => {
        return `${info.type}/${info.mal_id}/pictures`
      }
    })
  }),
});

export const {
  useLazyGetTopAnimeQuery,
  useLazyGetSchedulesQuery,
  useGetAnimeRelationsByIdQuery,
  useGetAnimeRecommendationsByIdQuery,
  useGetPicturesByIdQuery,
  useGetAnimeFullByIdQuery
} = animeListApi;
