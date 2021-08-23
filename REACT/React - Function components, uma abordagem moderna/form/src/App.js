import React from "react";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { validarCPF, validarSenha } from "./Models/cadastro";

import { Container, Typography } from "@material-ui/core";

import Validacoes from "./Context/Validações";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      {/*Elementos dentro do Contexto Validacoes.Provider vão poder conhecer os values, ou seja, o FormulárioDeCadastro */}
      <Validacoes.Provider value={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </Validacoes.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  //Submit
  console.log(dados);
}

export default App;
