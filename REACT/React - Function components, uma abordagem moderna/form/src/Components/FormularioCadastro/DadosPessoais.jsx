import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import Validacoes from "../../Context/Validações";
import useErros from "../../Hooks/useErros";

function DadosPessoais({ aoEnviar}) {
  //Por props aoEnviar

  //Manejando STATES (HOOKS)
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(Validacoes); 
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); 
        if(possoEnviar()){
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades }); //Passando por PROPS
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          //Validação
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        label="Nome"
        name="nome"
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
        name="sobrenome"
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
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        name="cpf"
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
