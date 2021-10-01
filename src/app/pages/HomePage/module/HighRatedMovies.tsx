import { Spinner } from '@chakra-ui/spinner';
import { useGetHighRatedMoviesQuery } from 'services/movies';

import { MovieList } from '../components/MovieList';

export function HighRatedMovies() {
  const { data, isLoading } = useGetHighRatedMoviesQuery();

  return (
    <>
      {isLoading && <Spinner />}
      {data && <MovieList title="High Rated Movies" movies={data.results} />}
    </>
  );
}
