import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Container, Grid } from "./styles";
import { Button, Input, Select } from "components";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory;
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [curso, setCurso] = useState("");
  const [ra, setRa] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [profissao, setProfissao] = useState("");
  const [codigo_conselho, setCodigoConselho] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = async () => {
    setLoading(true);
    try {
      await axios.post(`http://localhost:8080/animaclinics/usuarios`, {
        nome,
        cpf,
        telefone,
        curso,
        ra,
        endereco,
        cep,
        email,
        profissao,
        codigo_conselho,
        password
      });
      setLoading(false);
      setNome("");
      setCpf("");
      setTelefone("");
      setCurso("");
      setRa("");
      setEndereco("");
      setCep("");
      setEmail("");
      setProfissao("");
      setCodigoConselho("");
      setPassword("")
      toast.success("Usuário criado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      history.push("/");
    } catch (error) {
      toast.error("Não foi possível criar, tente mais tarde", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  const tipoProfissao = [
    "Nutrição",
    "Medicina",
    "Farmácia",
    "Fisioterapia",
    "Odontologia",
    "Biomedicina",
    "Enfermagem",
    "Fonoaudiologia",
    "Estética e cosmética",
  ];

  return (
    <Container>
      <h1>Cadastro de usuários</h1>
      <Grid>
        <Input
          type="text"
          width="100%"
          value={nome}
          placeholder="Nome completo"
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="text"
          width="100%"
          value={cpf}
          placeholder="CPF"
          mask={"999.999.999-99"}
          onChange={(e) => setCpf(e.target.value)}
        />
        <Input
          type="text"
          width="100%"
          value={curso}
          placeholder="Curso"
          onChange={(e) => setCurso(e.target.value)}
        />
        <Input
          type="text"
          width="100%"
          value={ra}
          placeholder="RA"
          onChange={(e) => setRa(e.target.value)}
        />
        <Input
          type="text"
          width="100%"
          value={cep}
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
        />
        <Input
          type="text"
          width="100%"
          value={endereco}
          placeholder="Endereço"
          onChange={(e) => setEndereco(e.target.value)}
        />
        <Input
          type="text"
          width="100%"
          value={telefone}
          placeholder="Telefone"
          mask={"(99) 9999-9999"}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <Input
          type="text"
          width="100%"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Select
          type="text"
          width="100%"
          value={profissao}
          placeholder="Profissão"
          onChange={(e) => setProfissao(e.target.value)}
        >
          <option value="" disabled>
            Selecione a profissão
          </option>
          {tipoProfissao.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Input
          type="text"
          width="100%"
          value={codigo_conselho}
          placeholder="Codigo"
          onChange={(e) => setCodigoConselho(e.target.value)}
        />
        <Input
          type="text"
          width="100%"
          value={password}
          placeholder="Crie uma senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <div className="button-container">
        <Button
          onClick={handleAdd}
          disabled={
            loading ||
            !nome ||
            !cpf ||
            !curso ||
            !ra ||
            !endereco ||
            !cep ||
            !telefone ||
            !email ||
            !profissao ||
            profissao === "" ||
            !codigo_conselho
          }
        >
          Cadastrar
        </Button>
      </div>
    </Container>
  );
}

export default Register;
