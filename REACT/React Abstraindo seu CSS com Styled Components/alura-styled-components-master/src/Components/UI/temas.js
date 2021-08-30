import {fundoClaro, conteudoClaro, textoFundoClaro } from "./variaveis"
import {fundoEscuro, conteudoEscuro, textoFundoEscuro } from "./variaveis"

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro,
    filter: ''
}

export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filer: "invert(100%)"
}