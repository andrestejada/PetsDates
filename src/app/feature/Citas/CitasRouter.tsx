import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from '../../shared/components/LazyFallback';

const CitasMainPage = React.lazy(() => import('./pages/Main'));

export const CitasRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/" component={CitasMainPage}></Route>
    </Switch>
  </React.Suspense>
);
