import React, { useState, useEffect } from 'react';
import api from 'api';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input, Button } from 'components';
import { Container, LeftBox, RightBox, Title, Form, ForgotText, Div } from './styles';
import Cookies from 'js-cookie';

const Login = ({ setIsLoggedIn }) => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const userData = Cookies.get('userData');
    if (userData) {
      setIsLoggedIn(true);
      history.push('/dashboard');
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('usuarios/login', {
        email,
        senha: password,
      });
      const user = response?.data;
      if (user) {
        Cookies.set('userData', JSON.stringify(user), { expires: 7 });
        setIsLoggedIn(true);
        toast.success('Login efetuado com sucesso!', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'colored',
        });
        history.push('/dashboard');
      } else {
        toast.error('E-mail ou senha inválido!', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'colored',
        });
      }
    } catch (error) {
      if (error.response) {
        toast.error('E-mail ou senha inválido', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'colored',
        });
      } else {
        toast.error('Ocorreu um erro durante o login, tente mais tarde!', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'colored',
        });
      }
    }
  };

  return (
    <Container>
      <LeftBox>
        <Form>
          <Title>Login</Title>
          <Div>
            <Input placeholder="Insira seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)} password />
          </Div>
          <Button disabled={!email || !password} onClick={handleLogin}>
            Entrar
          </Button>
          <ForgotText style={{ marginTop: '50px' }} onClick={() => history.push('/cadastro')}>
            Cadastre-se
          </ForgotText>
          <ForgotText onClick={() => history.push('/cadastro')}>Redefinir senha</ForgotText>
        </Form>
      </LeftBox>
      <RightBox />
    </Container>
  );
};

export default Login;
