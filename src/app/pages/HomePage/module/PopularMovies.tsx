import { useGetPopularMoviesQuery } from 'services/movies';

import { MovieList } from '../components/MovieList';
import { MovieSkeleton } from '../components/MovieSkeleton';

export function PopularMovies() {
  const { data, isLoading } = useGetPopularMoviesQuery();

  return (
    <>
      {isLoading && <MovieSkeleton />}
      {data && <MovieList title="Popular" movies={data.results} />}
    </>
  );
}
