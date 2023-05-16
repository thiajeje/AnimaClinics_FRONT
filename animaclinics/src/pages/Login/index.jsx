import React, { useState } from "react";
import { Input, Button } from "components";

import {
  Container,
  LeftBox,
  RightBox,
  Title,
  Form,
  ForgotText,
  Div,
  Logo,
} from "./styles";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <LeftBox>
        <Form>
          <Title>Login</Title>
          <Logo>{/* <img src={logobank} alt="" /> */}</Logo>
          <Div>
            <Input
              width="100%"
              label="E-mail"
              placeholder="Type your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              width="100%"
              label="Password"
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              password
              type="password"
            />
          </Div>

          <Button disabled={!email || !password}>Entrar</Button>
          <ForgotText onClick={() => history.push("/cadastro")}>
            Cadastre-se
          </ForgotText>
        </Form>
      </LeftBox>
      <RightBox></RightBox>
    </Container>
  );
};

export default Login;
