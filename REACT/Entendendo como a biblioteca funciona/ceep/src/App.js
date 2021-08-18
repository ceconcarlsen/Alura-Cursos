import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';

import './assets/App.css'
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component{ //CONTROLO O STATE GERAL DA APLICAÇÃO (NOTAS/CATEGORIAS)

  constructor(){
    super();

    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render(){
  return ( //JSX: Declarar elementos HTML no JS
    <section className="conteudo">
      <FormularioCadastro 
        categorias={this.categorias}
        criarNota={this.notas.adicionarNota.bind(this.notas)}
      />   
      <main className="conteudo-principal">
        <ListaDeCategorias 
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias}/> {/*Passando o objeto completo para a lista de categorias */}
        <ListaDeNotas 
          apagarNota={this.notas.apagarNota.bind(this.notas)}
          notas={this.notas} />
      </main>
      
    </section>
  );
 }
} 

export default App;