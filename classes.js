class Livro{
    constructor(titulo, autor, editora, genero, isbm, idade, idioma){
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.genero = genero;
        this.isbm = isbm;
        this.idade = idade;
        this.idioma = idioma;

    }
    exibirDados(){
        return `Título da obra: ${this.titulo} \n
        Autor: ${this.autor} \n
        Editora: ${this.editora} \n`
    }
}