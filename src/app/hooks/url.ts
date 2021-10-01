import { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export function useUrlQuery() {
  return new URLSearchParams(useLocation().search);
}

export function useGetMovieId() {
  const movieId = useUrlQuery().get('detail') as string;

  if (movieId) {
    return Number(movieId);
  }

  return null;
}

export function useQueryParam() {
  const history = useHistory();
  const location = useLocation();

  const addQueryParam = useCallback(
    (id: number) => {
      history.push(location.pathname + `?detail=${id}`);
    },
    [history, location.pathname]
  );

  const deleteQueryParam = useCallback(() => {
    history.push(location.pathname);
  }, [history, location.pathname]);

  return { addQueryParam, deleteQueryParam };
}
