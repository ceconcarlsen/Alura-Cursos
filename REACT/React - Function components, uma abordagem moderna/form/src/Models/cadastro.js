//VALIDAÇÕES
function validarCPF(cpf) {
    //Validação
    if (cpf.length !== 11) {
      return { valido: false, texto: "CPF deve ter 11 dígitos." };
    } else {
      return { valido: true, texto: "" };
    }
  }

function validarSenha(senha) {
    //Validação
    if (senha.length < 4 || senha.length > 72) {
      return { valido: false, texto: "Deve ter entre 4 e 72 dígitos." };
    } else {
      return { valido: true, texto: "" };
    }
  }

  
export {validarCPF, validarSenha};