import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Register from './pages/Register'


const RoutesApp = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Register} />
      </Switch>
  </BrowserRouter>
);

export default RoutesApp;