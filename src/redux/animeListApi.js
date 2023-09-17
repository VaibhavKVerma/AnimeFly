import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JIKAN_API_V4 } from "../constants/Api";
import { animeApi } from "../constants/Constants";
import axios from "axios";

const createPromise = async (info) =>
  await axios.get(`${JIKAN_API_V4}${info.type}/${info.mal_id}/pictures`);

export const animeListApi = createApi({
  reducerPath: animeApi,
  baseQuery: fetchBaseQuery({
    baseUrl: JIKAN_API_V4,
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
      query: (params) =>
        `schedules?filter=${params.filter}&page=${params.page}`,
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
    //TODO
    getPicturesById: builder.query({
      queryFn: async (request) => {
        let response = [];
        await request.map(async (info) => await createPromise(info));
        response = response.map((ele) => ele.data);
        return { data: response };
      },
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
    getAnimeBySearch: builder.query({
      query: (params) => `anime?order_by=mal_id&q=${params}`,
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
  useLazyGetEpisodesByIdQuery,
  useGetAnimeBySearchQuery
} = animeListApi;
