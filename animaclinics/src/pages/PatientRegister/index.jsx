import React, { useState } from "react";
import { Header, Input, Select, Button } from "components";
import { Container, Grid } from "./styles";
import api from "api";
import { toast } from "react-toastify";

function PatientRegister() {
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState("");
  const [convenio, setConvenio] = useState("");
  const [isValidDate, setIsValidDate] = useState(true);

  const tipoConvenio = ["Bradesco Saúde", "Unimed", "Particular"];
  const tipoSexo = ["Masculino", "Feminino", "Não binário"];

  const handleDataNascimentoChange = (e) => {
    const { value } = e.target;
    const isValidDate = validateDate(value);
    setDataNascimento(value);
    setIsValidDate(isValidDate);
  };

  const validateDate = (date) => {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(date)) {
      return false;
    }

    const [day, month, year] = date.split("/").map(Number);

    if (day < 1 || day > 31) {
      return false;
    }

    if (month < 1 || month > 12) {
      return false;
    }

    if (year < 1900 || year > 2100) {
      return false;
    }
    return true;
  };

  const handleAdd = async () => {
    setLoading(true);
    try {
      await api({
        method: "POST",
        url: `/pacientes`,
        data: {
          nome,
          cpf,
          telefone,
          endereco,
          cep,
          email,
          data_nascimento: dataNascimento,
          convenio,
          sexo,
        },
      });
      setLoading(false);
      setNome("");
      setCpf("");
      setTelefone("");
      setEndereco("");
      setCep("");
      setEmail("");
      setDataNascimento("");
      setConvenio("");
      setSexo("");
      toast.success("Usuário cadastrado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Não foi possível criar, tente mais tarde", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h3>Cadastro de paciente</h3>
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
            value={dataNascimento}
            placeholder="Data de nascimento"
            mask={"99/99/9999"}
            onChange={handleDataNascimentoChange}
            className={!isValidDate ? "invalid" : ""}
          />

          <Input
            type="text"
            width="100%"
            value={cep}
            placeholder="CEP"
            mask={"99999-999"}
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
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            width="100%"
            value={telefone}
            placeholder="Telefone"
            mask={"(99) 9999-9999"}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <Select
            type="text"
            width="101%"
            value={convenio}
            onChange={(e) => setConvenio(e.target.value)}
          >
            <option value="" disabled>
              Selecione o convênio
            </option>
            {tipoConvenio.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <Select
            type="text"
            width="101%"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          >
            <option value="" disabled>
              Selecione o sexo
            </option>
            {tipoSexo.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Grid>
        <div className="button-container">
          <Button
            onClick={handleAdd}
            disabled={
              loading ||
              !nome ||
              !cpf ||
              !endereco ||
              !cep ||
              !telefone ||
              !email ||
              !sexo ||
              sexo === "" ||
              !convenio ||
              convenio === "" ||
              !isValidDate
            }
          >
            Cadastrar
          </Button>
        </div>
      </Container>
    </>
  );
}

export default PatientRegister;
