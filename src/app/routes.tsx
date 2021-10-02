import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { HomePage } from 'app/pages/HomePage/Loadable';
import { MovieDetailPage } from 'app/pages/MovieDetailPage/Loadable';
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable';

export function AppRoutes() {
  return (
    <>
      <ScrollRestore />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:id" component={MovieDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

function ScrollRestore() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
