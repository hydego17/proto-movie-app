import { Spinner } from '@chakra-ui/spinner';
import { useGetPopularMoviesQuery } from 'services/movies';

import { MovieList } from '../components/MovieList';

export function PopularMovies() {
  const { data, isLoading } = useGetPopularMoviesQuery();

  return (
    <>
      {isLoading && <Spinner />}
      {data && <MovieList title="Popular Movies" movies={data.results} />}
    </>
  );
}
