import React, { useState, useEffect } from 'react';
import { Header } from 'components';
import { Container } from './styles';
import Cookies from 'js-cookie';

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = Cookies.get('userData');
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      } catch (error) {
        setUserData(null);
      }
    } else {
      setUserData(null);
    }
  }, []);

  if (!userData) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Dashboard</h1>
        <p>Nome do usuário: {userData.nome}</p>
        <p>ID do usuário: {userData.id}</p>
      </Container>
    </>
  );
}

export default Dashboard;
