import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { HomePage } from 'app/pages/HomePage/Loadable';
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
