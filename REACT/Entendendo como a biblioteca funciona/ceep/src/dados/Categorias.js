/*
Dados das categorias, pois REACT é um bibilioteca de renderização, logo
não deve se respondabilizar pelos dados
*/

export default class Categorias{
    constructor(){
    this.categorias = []; 
    this._inscritos = []; //private 
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }
    notificar(){
        this._inscritos.forEach(func =>{
            func(this.categorias);
        } );
    }

    adicionarCategoria(novaCategoria){ //Adicionando dinâmicamente
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}