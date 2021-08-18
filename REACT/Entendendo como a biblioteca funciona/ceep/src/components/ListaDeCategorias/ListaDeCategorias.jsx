import React, { Component } from 'react'
import './style.css'

 class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]}
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias); //Só posso me inscrever se o componente estiver montado
    }
    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }
    _novasCategorias(categorias){
        this.setState({...this.state,categorias}) //Setando um novo estado 
    }
    _handlerEventoInput(e){
        if(e.key === "Enter"){
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

     render() { 
         return (
             <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index)=>{
                      return <li key={index} className="lista-categorias_item">{categoria}</li>     
                    })}
                </ul>
                <input 
                    type="text" 
                    className="lista-categorias_input" 
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handlerEventoInput.bind(this)}
                /> 
            </section>
         );
     }
 }
  
export default ListaDeCategorias;