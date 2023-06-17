import React, { useState, useEffect } from 'react';
import { Header, AgendamentItem, Select } from 'components';
import { Container, ContentArea, Filter } from './styles';
import api from 'api';

function ListAgendament() {
  const [agendament, setAgendament] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const [visibleItems, setVisibleItems] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');

  const fetchAgendament = async () => {
    const resp = await api({
      method: 'GET',
      url: '/agendamentos',
    });
    console.log(resp.data);
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

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredItems = visibleItems.filter((item) => item.status === statusFilter || statusFilter === '');

  return (
    <>
      <Header />
      <Container>
        <Filter>
          <div>
            <h3>Agendamentos</h3>
          </div>
          <div>
            <Select value={statusFilter} onChange={handleFilterChange}>
              <option value="" disabled>
                Selecione o status...
              </option>
              <option value="">Todos</option>
              <option value="Aguardando consulta">Aguardando consulta</option>
              <option value="Concluído">Concluído</option>
              <option value="Cancelado">Cancelado</option>
            </Select>
          </div>
        </Filter>

        <ContentArea>
          {filteredItems.map((item) => (
            <AgendamentItem agendament={item} key={item.id} />
          ))}
        </ContentArea>

        {filteredItems.length < visibleItems.length && filteredItems.length !== 0 && statusFilter === '' && (
          <button onClick={loadMoreItems}>Carregar Mais</button>
        )}

        {filteredItems.length === 0 && statusFilter !== '' && <p>Nenhum agendamento encontrado com o status selecionado.</p>}
      </Container>
    </>
  );
}

export default ListAgendament;
