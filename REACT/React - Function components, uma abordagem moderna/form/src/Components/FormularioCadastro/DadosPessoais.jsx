import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validarCPF }) {
  //Por props aoEnviar

  //Manejando STATES (HOOKS)
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades }); //Passando por PROPS
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          //Validação
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          let tmpCpf = event.target.value;

          if (tmpCpf.length === 11) {
            tmpCpf = tmpCpf.substr(0, 11);
          }

          setCpf(tmpCpf);
        }}
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value);
          setErros({ cpf: ehValido });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        checked={promocoes}
        control={
          <Switch
            name="promocoes"
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            color="primary"
          ></Switch>
        }
      ></FormControlLabel>

      <FormControlLabel
        label="Novidades"
        checked={novidades}
        control={
          <Switch
            name="novidades"
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            color="primary"
          ></Switch>
        }
      ></FormControlLabel>

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
