import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login/index';
import Register from './pages/Register';
import Dashboard from 'pages/Dashboard';
import Agendament from 'pages/Agendament';
import PatientRegister from 'pages/PatientRegister';
import Anamnese from 'pages/Anamnese';

const RoutesApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
      <PrivateRoute
          exact
          path="/dashboard"
          render={() => <Dashboard setIsLoggedIn={setIsLoggedIn} />}
        />        <PrivateRoute exact path="/agendamento" component={Agendament} />
        <PrivateRoute exact path="/anamnese" component={Anamnese} />
        <PrivateRoute
          exact
          path="/cadastro-paciente"
          component={PatientRegister}
        />
        <Route exact path="/" component={() => <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path="/cadastro" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesApp;
