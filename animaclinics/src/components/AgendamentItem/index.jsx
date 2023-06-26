import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Container, Div, Title, Subtitle, Icon } from './styles';
import { useHistory } from 'react-router-dom';
import { success, warn, error } from 'styles/colorProvider';
import { format } from 'date-fns';

function AgendamentItem({ agendament }) {
  const history = useHistory();

  const navigate = () => {
    history.push(`/agendamento/${agendament?.id}`);
  };

  const statusColors = {
    Concluído: success,
    'Aguardando consulta': warn,
    Cancelado: error,
  };

  if (!agendament) {
    return null;
  }

  return (
    <>
      <Container onClick={navigate}>
        <div className="description">
          <div className="iconCar">
            <CgProfile size={30} />
          </div>

          <Div>
            <Title>Paciente: {agendament.paciente?.nome}</Title>
            <Subtitle>CPF: {agendament.paciente?.cpf}</Subtitle>
          </Div>

          <Div>
            <Title>Consulta: {format(new Date(agendament?.dataHora), 'dd/MM/yyyy HH:mm')}</Title>
            <Subtitle>Telefone: {agendament.paciente?.telefone}</Subtitle>
          </Div>

          <Div>
            <Title>Médico(a): {agendament.usuario?.nome}</Title>
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

export default AgendamentItem;
