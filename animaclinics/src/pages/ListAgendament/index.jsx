import React, { useState, useEffect } from 'react';
import { Header, AgendamentItem } from 'components';
import { Container, ContentArea } from './styles';
import api from 'api';

function ListAgendament() {
  const [agendament, setAgendament] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const [visibleItems, setVisibleItems] = useState([]);

  const fetchAgendament = async () => {
    const resp = await api({
      method: 'GET',
      url: `/agendamentos`,
    });
    setAgendament(resp.data);
  };

  useEffect(() => {
    fetchAgendament();
  }, []);

  useEffect(() => {
    setVisibleItems(agendament.slice(0, currentPage * itemsPerPage));
  }, [agendament, currentPage, itemsPerPage]);

  const loadMoreItems = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Header />
      <Container>
        <ContentArea>
          {visibleItems.map((item) => (
            <AgendamentItem agendament={item} key={item.id} />
          ))}
        </ContentArea>

        {visibleItems.length < agendament.length && <button onClick={loadMoreItems}>Carregar Mais</button>}
      </Container>
    </>
  );
}

export default ListAgendament;
