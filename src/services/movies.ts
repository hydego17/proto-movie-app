import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IMoviesApi, IMovieDetail } from 'types';

import { apiKey } from './config';

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  tagTypes: [
    'popularMovies',
    'topRatedMovies',
    'movieDetail',
    'searchedMovies',
  ],
  endpoints: (builder) => ({
    // Popular Movies Query
    // query: void
    getPopularMovies: builder.query<IMoviesApi, void>({
      query: () => ({
        url: `/movie/popular`,
        params: {
          api_key: apiKey,
        },
      }),
      providesTags: ['popularMovies'],
    }),

    // High Rated Movies Query
    // query: void
    getTopRatedMovies: builder.query<IMoviesApi, void>({
      query: () => ({
        url: `/movie/top_rated`,
        params: {
          api_key: apiKey,
        },
      }),
      providesTags: ['topRatedMovies'],
    }),

    // Movie Detail Query
    // query: id (number)
    getMovieDetail: builder.query<IMovieDetail, number | null>({
      query: (id) => ({
        url: `/movie/${id}`,
        params: {
          api_key: apiKey,
          append_to_response: 'person,videos',
        },
      }),
      providesTags: (result) =>
        result
          ? [{ type: 'movieDetail' as const, id: result.id }, 'movieDetail']
          : ['movieDetail'],
    }),

    // Search Movies Query
    // query: search(string)
    searchMovies: builder.query<IMoviesApi, string>({
      query: (search) => ({
        url: `/search/movie`,
        params: {
          api_key: apiKey,
          query: search,
        },
      }),
      providesTags: ['searchedMovies'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetMovieDetailQuery,
  useSearchMoviesQuery,
} = moviesApi;
