import React from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';

import Login from './pages/Login'


const Routes = () => (
    <BrowserRouter>
      <Navigate>
        <Route exact path="/" component={Login} />
      </Navigate>
  </BrowserRouter>
);

export default Routes;