class Livro{
    constructor(titulo, autor, editora, genero, isbm,ano, idioma){
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.genero = genero;
        this.isbm = isbm;
        this.ano = ano;
        this.idioma = idioma;

    }
    exibirDados(){
        return `Título da obra: ${this.titulo} \n
        Autor: ${this.autor} \n
        Editora: ${this.editora} \n
        Gênero: ${this.genero}
        ISBM: ${this.isbm}
        Ano de publicação: ${this.idade}
        Idioma: ${this.idioma}`
    }
}

class Editora{
    constructor(nome, cnpj, cidade){
        this.nome = nome;
        this.cnpj = cnpj;
        this.cidade = cidade;
    }
    exibirDados(){
        return `Nome: ${this.nome} \n
        CNPJ: ${this.cnpj} \n
        Cidade: ${this.cidade}`
    }
}