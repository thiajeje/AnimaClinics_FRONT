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
          <Div>
            <Input
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              password
              type="password"
            />
          </Div>
          <Button
            disabled={!email || !password}
            onClick={() =>history.push("/cadastro-paciente")}
          >
            Entrar
          </Button>
          <ForgotText
            style={{ marginTop: "50px" }}
            onClick={() => history.push("/cadastro")}
          >
            Cadastre-se
          </ForgotText>
          <ForgotText onClick={() => history.push("/cadastro")}>
            Redefinir senha
          </ForgotText>
        </Form>
      </LeftBox>
      <RightBox />
    </Container>
  );
};

export default Login;
