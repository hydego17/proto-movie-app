import { useCallback } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

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
    (query: string) => {
      history.push(location.pathname + `?${query}`);
    },
    [history, location.pathname]
  );

  const deleteQueryParam = useCallback(() => {
    history.push(location.pathname);
  }, [history, location.pathname]);

  return { addQueryParam, deleteQueryParam };
}

export function useParamsId() {
  const params = useParams<{ id: string }>();

  if (params.id) {
    return Number(params.id);
  }
  return null;
}
