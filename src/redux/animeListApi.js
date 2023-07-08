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
      query: (id) => `anime/${id}/full`,
    }),
    getAnimeRecommendationsById: builder.query({
      query: (id) => `anime/${id}/recommendations`,
    }),
    getAnimeRelationsById: builder.query({
      query: (id) => `anime/${id}/relations`,
    }),
    getPicturesById: builder.query({
      query: (info) => `${info.type}/${info.mal_id}/pictures`,
    }),
    getCharactersById: builder.query({
      query: (id) => `anime/${id}/characters`,
      transformResponse: (response) => {
        const main = response.data.filter((res) => res.role === "Main");
        const support = response.data
          .filter((res) => res.role === "Supporting")
          .sort((a, b) => b.favorites - a.favorites);
        return [...main, ...support];
      },
    }),
    getStaffsById: builder.query({
      query: (id) => `anime/${id}/staff`,
    }),
    getReviewsById: builder.query({
      query: (id) => `anime/${id}/reviews`,
    }),
    getEpisodesById: builder.query({
      query: (params) => `anime/${params.id}/episodes?page=${params.page}`,
    }),
  }),
});

export const {
  useLazyGetTopAnimeQuery,
  useLazyGetSchedulesQuery,
  useGetAnimeRelationsByIdQuery,
  useGetAnimeRecommendationsByIdQuery,
  useGetPicturesByIdQuery,
  useGetAnimeFullByIdQuery,
  useGetCharactersByIdQuery,
  useGetStaffsByIdQuery,
  useGetReviewsByIdQuery,
  useLazyGetEpisodesByIdQuery
} = animeListApi;
