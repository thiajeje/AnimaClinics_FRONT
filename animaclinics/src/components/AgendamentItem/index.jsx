import React from 'react';
import { BsShieldExclamation } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Container, Div, Title, Subtitle, Icon } from './styles';
import { useHistory } from 'react-router-dom';

function ListAgendament({ agendament }) {
  const history = useHistory();

  const navigate = async (e) => {
    e.preventDefault();
    history.push(`/agendamento/${agendament?.id}`);
  };

  return (
    <>
      <Container onClick={navigate}>
        <div className="description">
          <div className="iconCar">
            <BsShieldExclamation size={23} />
          </div>

          <Div>
            <Title>Nome</Title>
            <Subtitle>Teste</Subtitle>
          </Div>

          {/* <Div>
            <Title>{agendament.cpf}</Title>
            <Subtitle>{agendament.email}</Subtitle>
          </Div>

          <Div>
            <Title>{agendament.telefone}</Title>
            <Title>Status: {agendament.status}</Title>
          </Div> */}

          <Icon>
            <HiOutlineArrowNarrowRight color="#C4C4C4" size={25} className="iconArrow" />
          </Icon>
        </div>
      </Container>
    </>
  );
}

export default ListAgendament;
