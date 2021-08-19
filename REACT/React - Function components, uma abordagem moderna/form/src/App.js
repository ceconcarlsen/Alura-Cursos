import React from "react";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";

import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro validarCPF={validarCPF} aoEnviar={aoEnviarForm} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  //Submit
  console.log(dados);
}

function validarCPF(cpf) {
  //Validação
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

export default App;
