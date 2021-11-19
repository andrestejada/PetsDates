import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {CitasRouter}  from './feature/Citas/CitasRouter';
import {HomeRouter}  from './feature/Home/HomeRouter';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/" exact component={HomeRouter} />
        <Route path="/citas" exact component={CitasRouter} /> 
      </Switch>
    </BrowserRouter>
  );
};
