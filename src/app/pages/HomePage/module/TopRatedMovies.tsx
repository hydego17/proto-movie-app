import { useGetTopRatedMoviesQuery } from 'services/movies';

import { MovieList } from '../components/MovieList';
import { MovieSkeleton } from '../components/MovieSkeleton';

export function TopRatedMovies() {
  const { data, isLoading } = useGetTopRatedMoviesQuery();

  return (
    <>
      {isLoading && <MovieSkeleton />}
      {data && <MovieList title="Top Rated" movies={data.results} />}
    </>
  );
}
