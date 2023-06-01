import React from 'react';
import { Header } from 'components';
import { Container } from './styles';

function Dashboard({ setIsLoggedIn }) {
  setIsLoggedIn(true);
  const userData = JSON.parse(localStorage.getItem('userData'));
  const userName = userData ? userData.nome : '';

  return (
    <>
      <Header />
      <Container>
        <h1>Dashboard</h1>
        <h3>{userName}</h3>
      </Container>
    </>
  );
}

export default Dashboard;
