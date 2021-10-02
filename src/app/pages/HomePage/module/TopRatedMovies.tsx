import { Spinner } from '@chakra-ui/spinner';
import { useGetTopRatedMoviesQuery } from 'services/movies';

import { MovieList } from '../components/MovieList';

export function TopRatedMovies() {
  const { data, isLoading } = useGetTopRatedMoviesQuery();

  return (
    <>
      {isLoading && <Spinner />}
      {data && <MovieList title="Top Rated" movies={data.results} />}
    </>
  );
}
