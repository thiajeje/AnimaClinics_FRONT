import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, ContentArea, Title } from './styles';
import { Header, Button } from 'components';
import api from 'api';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { format } from 'date-fns';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function Anamnese() {
  const history = useHistory();
  const [userData, setUserData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHours, setSelectedHours] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patient, setPatient] = useState([]);
  const [steps, setSteps] = useState(1);

  const fetchPatient = async () => {
    const resp = await api({
      method: 'GET',
      url: `/pacientes`,
    });
    setPatient(resp.data);
  };

  const handleAgendament = async () => {
    // setLoading(true);
    try {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      const response = await api({
        method: 'POST',
        url: `/agendamentos`,
        data: {
          id_criador: userData.id,
          usuario: {
            id: selectedDoctor.id,
          },
          paciente: {
            id: selectedPatient.id,
          },
          dataHora: `${formattedDate} ${selectedHours}:00`,
          status: 'Aguardando consulta',
        },
      });
      console.log(response);
      setSelectedDate(null);
      setSelectedHours(null);
      setSelectedPatient(null);
      setSelectedDoctor(null);
      setSteps(1);
      toast.success('Agendamento feito!', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
      });
    } catch (error) {
      toast.error('Não foi possível agendar, tente mais tarde', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
      });
    }
  };

  useEffect(() => {
    fetchPatient();
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

  const goBack = () => {
    if (steps > 1) setSteps(steps - 1);
  };

  return (
    <>
      <Header />
      <Container>
        {steps === 1 && (
          <>
            <Title style={{ margin: '0' }}>
              <h3>Selecione o paciente para o qual deseja cadastrar anamnese...</h3>
            </Title>
            <Autocomplete
              options={patient}
              sx={{ width: '100%' }}
              style={{ margin: '20px 0 5px 0' }}
              value={selectedPatient}
              getOptionLabel={(option) => option?.nome}
              onChange={(event, newValue) => {
                setSelectedPatient(newValue);
              }}
              renderOption={(props, option) => (
                <>
                  <p style={{ paddingLeft: 10, cursor: 'pointer' }} {...props} className="title">
                    {option?.nome} - {option?.cpf}
                  </p>
                </>
              )}
              renderInput={(params) => <TextField {...params} label="Selecione o paciente" placeholder="Digite para buscar..." />}
            />
            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', margin: '50px 0 0 0' }}>
              <Button outlined onClick={() => goBack(1)}>
                Voltar
              </Button>
              {selectedPatient && (
                <Button style={{ marginLeft: '15px' }} onClick={() => setSteps(2)}>
                  Prosseguir
                </Button>
              )}
            </div>
          </>
        )}
        {steps === 2 && (
          <>
            <Title>Teste</Title>
            <ContentArea></ContentArea>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', margin: '50px 0 0 0' }}>
              <Button outlined onClick={() => goBack(2)}>
                Voltar
              </Button>
              {selectedDate && selectedHours && (
                <Button style={{ marginLeft: '15px' }} onClick={handleAgendament}>
                  Cadastrar
                </Button>
              )}
            </div>{' '}
          </>
        )}
      </Container>
    </>
  );
}

export default Anamnese;
