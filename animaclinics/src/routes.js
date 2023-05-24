import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import Register from './pages/Register';
import Dashboard from 'pages/Dashboard';
import Agendament from 'pages/Agendament';
import PatientRegister from 'pages/PatientRegister';
import Anamnese from 'pages/Anamnese';


const RoutesApp = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cadastro" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/agendamento" component={Agendament} />
        <Route exact path="/anamnese" component={Anamnese} />
        <Route exact path="/cadastro-paciente" component={PatientRegister} />
        <Route exact path="/" component={Login} />
      </Switch>
  </BrowserRouter>
);

export default RoutesApp;