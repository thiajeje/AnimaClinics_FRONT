import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Container, Div, Title, Subtitle, Icon } from './styles';
import { useHistory } from 'react-router-dom';
import { success, warn, error } from 'styles/colorProvider';

function ListAgendament({ agendament }) {
  const history = useHistory();

  const navigate = async (e) => {
    e.preventDefault();
    history.push(`/agendamento/${agendament?.id}`);
  };

  // Mapeamento de status para cores
  const statusColors = {
    Concluído: success,
    'Aguardando consulta': warn,
    Cancelado: error,
  };

  return (
    <>
      <Container onClick={navigate}>
        <div className="description">
          <div className="iconCar">
            <CgProfile size={30} />
          </div>

          <Div>
            <Title>Paciente: {agendament.paciente.nome}</Title>
            <Subtitle>CPF: {agendament.paciente.cpf}</Subtitle>
          </Div>

          <Div>
            <Title>
              Consulta: {agendament.data} - {agendament.hora}
            </Title>
            <Subtitle>Telefone: {agendament.paciente.telefone}</Subtitle>
          </Div>

          <Div>
            <Title>Médico(a): {agendament.usuario.nome}</Title>
            <Subtitle color={statusColors[agendament.status]}>{agendament.status}</Subtitle>
          </Div>

          <Icon>
            <HiOutlineArrowNarrowRight color="#C4C4C4" size={25} className="iconArrow" />
          </Icon>
        </div>
      </Container>
    </>
  );
}

export default ListAgendament;
