import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import styled from 'styled-components';
import { Container, ContentArea, ClaimOption, Title } from './styles';
import { Header } from 'components';
import api from 'api';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { format } from 'date-fns';

const StyledCalendar = styled(FullCalendar)`
  flex: 1;
`;

function Agendament() {
  const [userData, setUserData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHours, setSelectedHours] = useState(null);
  const calendarRef = useRef(null);
  const hour08 = useRef(null);
  const hour09 = useRef(null);
  const hour10 = useRef(null);
  const hour11 = useRef(null);
  const hour12 = useRef(null);
  // const hour13 = useRef(null);
  const hour14 = useRef(null);
  const hour15 = useRef(null);
  const hour16 = useRef(null);
  const hour17 = useRef(null);
  const hour18 = useRef(null);

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

  const handleAgendament = async () => {
    // setLoading(true);
    try {
      const formattedDate = format(selectedDate, 'dd-MM-yyyy');
      await api({
        method: 'POST',
        url: `/agendamentos`,
        data: {
          id_criador: userData.id,
          id_medico: 21,
          data: formattedDate,
          hora: selectedHours,
        },
      });
      setSelectedDate(null);
      setSelectedHours(null);
      toast.success('Agendamento feito!', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
      });
    } catch (error) {
      toast.error('Não foi possível agendar, tente mais tarde', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
      });
      // setLoading(false);
    }
  };

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
  };

  const handleSelectedDates = (info) => {
    setSelectedDate(info.start);
  };

  const handleOutsideClick = (event) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target) &&
      hour08.current &&
      !hour08.current.contains(event.target) &&
      hour09.current &&
      !hour09.current.contains(event.target) &&
      hour10.current &&
      !hour10.current.contains(event.target) &&
      hour11.current &&
      !hour11.current.contains(event.target) &&
      hour12.current &&
      !hour12.current.contains(event.target) &&
      // hour13.current &&
      // !hour13.current.contains(event.target) &&
      hour14.current &&
      !hour14.current.contains(event.target) &&
      hour15.current &&
      !hour15.current.contains(event.target) &&
      hour16.current &&
      !hour16.current.contains(event.target) &&
      hour17.current &&
      !hour17.current.contains(event.target) &&
      hour18.current &&
      !hour18.current.contains(event.target)
    ) {
      setSelectedDate(null);
      setSelectedHours(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-US', options).replace(/(\d+)\/(\d+)\/(\d+)/, '$2/$1/$3');
  };

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h3>
            Data do agendamento: <span>{selectedDate ? formatDate(selectedDate) : 'Sem data'}</span>
          </h3>
          <h3>
            Horário do agendamento: <span>{selectedHours ? selectedHours : 'Sem hora'}</span>
          </h3>
        </Title>
        <ContentArea>
          <div className="container-calendar" ref={calendarRef}>
            <StyledCalendar
              schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
              defaultView="dayGridMonth"
              dateClick={handleDateClick}
              displayEventTime={true}
              header={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
              }}
              selectable={true}
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              eventClick={(event) => {
                console.log(event.event._def.publicId);
              }}
              select={handleSelectedDates}
              eventLimit={1}
              date={selectedDate}
              onChange={handleSelectedDates}
              weekends={false}
              dayRender={(info) => {
                const weekendDay = info.date.getDay() === 0 || info.date.getDay() === 6;
                const pastDate = selectedDate !== null && info.date < selectedDate;
                const futureDate = selectedDate !== null && info.date > selectedDate;
                if (weekendDay || pastDate || futureDate) {
                  info.day.el.classList.add('disabled-day');
                }
              }}
            />
          </div>
          {selectedDate !== null && (
            <div className="options-area">
              <ClaimOption
                selected={selectedHours === '08:00'}
                onClick={() => {
                  setSelectedHours('08:00');
                }}
                ref={hour08}
              >
                08:00
              </ClaimOption>
              <ClaimOption
                selected={selectedHours === '09:00'}
                onClick={() => {
                  setSelectedHours('09:00');
                }}
                ref={hour09}
              >
                09:00
              </ClaimOption>
              <ClaimOption
                selected={selectedHours === '10:00'}
                onClick={() => {
                  setSelectedHours('10:00');
                }}
                ref={hour10}
              >
                10:00
              </ClaimOption>
              <ClaimOption
                selected={selectedHours === '11:00'}
                onClick={() => {
                  setSelectedHours('11:00');
                }}
                ref={hour11}
              >
                11:00
              </ClaimOption>
              <ClaimOption
                selected={selectedHours === '12:00'}
                onClick={() => {
                  setSelectedHours('12:00');
                }}
                ref={hour12}
              >
                12:00
              </ClaimOption>
              <ClaimOption
                selected={selectedHours === '14:00'}
                onClick={() => {
                  setSelectedHours('14:00');
                }}
                ref={hour14}
              >
                14:00
              </ClaimOption>
              <ClaimOption
                selected={selectedHours === '15:00'}
                onClick={() => {
                  setSelectedHours('15:00');
                }}
                ref={hour15}
              >
                15:00
              </ClaimOption>
              <ClaimOption
                selected={selectedHours === '16:00'}
                onClick={() => {
                  setSelectedHours('16:00');
                }}
                ref={hour16}
              >
                16:00
              </ClaimOption>
              <ClaimOption
                selected={selectedHours === '17:00'}
                onClick={() => {
                  setSelectedHours('17:00');
                }}
                ref={hour17}
              >
                17:00
              </ClaimOption>
              <ClaimOption
                selected={selectedHours === '18:00'}
                onClick={() => {
                  setSelectedHours('18:00');
                }}
                ref={hour18}
              >
                18:00
              </ClaimOption>
            </div>
          )}

          <button onClick={handleAgendament}>Marcar agendamento</button>
        </ContentArea>
      </Container>
    </>
  );
}

export default Agendament;
