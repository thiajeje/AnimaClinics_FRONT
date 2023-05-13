import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "./styles";
import { Input } from "components";

function Login() {
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
      });
      setLoading(false);
      toast.success("Veículo criado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    } catch (error) {
      alert("erro na requisição");
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1>Cadastro de usuários</h1>
      <Input
        type="text"
        value={nome}
        placeholder="Nome completo"
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        type="text"
        value={cpf}
        placeholder="CPF"
        onChange={(e) => setCpf(e.target.value)}
      />
      <Input
        type="text"
        value={curso}
        placeholder="Curso"
        onChange={(e) => setCurso(e.target.value)}
      />
      <Input
        type="text"
        value={ra}
        placeholder="RA"
        onChange={(e) => setRa(e.target.value)}
      />
      <Input
        type="text"
        value={endereco}
        placeholder="Endereço"
        onChange={(e) => setEndereco(e.target.value)}
      />
      <Input
        type="text"
        value={cep}
        placeholder="CEP"
        onChange={(e) => setCep(e.target.value)}
      />
      <Input
        type="text"
        value={telefone}
        placeholder="Telefone"
        onChange={(e) => setTelefone(e.target.value)}
      />
      <Input
        type="text"
        value={email}
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        value={profissao}
        placeholder="Profissão"
        onChange={(e) => setProfissao(e.target.value)}
      />
      <Input
        type="text"
        value={codigo_conselho}
        placeholder="Codigo"
        onChange={(e) => setCodigoConselho(e.target.value)}
      />

      <button onClick={handleAdd}>Enviar</button>
    </Container>
  );
}

export default Login;
