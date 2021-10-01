import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IMoviesApi, IMovieDetail } from 'types';

import { apiKey } from './config';

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  tagTypes: ['popularMovies', 'highRatedMovies', 'movieDetail'],
  endpoints: (builder) => ({
    // Popular Movies Query
    // query: void
    getPopularMovies: builder.query<IMoviesApi, void>({
      query: () => ({
        url: `/discover/movie?sort_by=popularity.desc`,
        params: {
          api_key: apiKey,
        },
      }),
      providesTags: ['popularMovies'],
    }),

    // High Rated Movies Query
    // query: void
    getHighRatedMovies: builder.query<IMoviesApi, void>({
      query: () => ({
        url: `/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc`,
        params: {
          api_key: apiKey,
        },
      }),
      providesTags: ['highRatedMovies'],
    }),

    // Movie Detail Query
    // query: id (number)
    getMovieDetail: builder.query<IMovieDetail, number | null>({
      query: (id) => ({
        url: `/movie/${id}`,
        params: {
          api_key: apiKey,
        },
      }),
      providesTags: (result) =>
        result
          ? [{ type: 'movieDetail' as const, id: result.id }, 'movieDetail']
          : ['movieDetail'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPopularMoviesQuery,
  useGetMovieDetailQuery,
  useGetHighRatedMoviesQuery,
} = moviesApi;
