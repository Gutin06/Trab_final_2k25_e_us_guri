let listaLivros = JSON.parse(localStorage.getItem('lista-livros')) || [];
let listaEditoras = JSON.parse(localStorage.getItem('lista-editoras')) || [];

let ed1 = new Editora('Moderna', 1, 'Sorocaba SP');
let ed2 = new Editora('Antiga', 2, 'Xique-Xique BA');
let ed3 = new Editora('Atual', 3, 'Guaratingueta NL');
let ed4 = new Editora('Futuristica', 4, 'Vanini RS');

if(listaEditoras.length ===0){
listaEditoras.push(ed1,ed2,ed3,ed4)
localStorage.setItem('lista-editoras', JSON.stringify(listaEditoras));
}
let flamengo = document.querySelector('.txtEditora');

for (let i = 0; i < listaEditoras.length; i++) {
    let opcao = document.createElement('option')
    opcao.value = i;
    opcao.innerText = listaEditoras[i].nome
     flamengo.appendChild(opcao)
}


document.querySelector('.botao').addEventListener('click', cadastro);


function cadastro(evento) {
    evento.preventDefault();

    let titulo = document.querySelector('.txtTitulo').value
    let autor = document.querySelector('.txtAutor').value
    let indiceEditora = document.querySelector('.txtEditora').value
    let editora = listaEditoras[indiceEditora]
    let genero = document.querySelector('.txtGenero').value
    let isbn = document.querySelector('.txtIsbn').value
    let ano = document.querySelector('.txtAno').value
    let idioma = document.querySelector('.txtIdioma').value


    let novoLivro = new Livro(titulo, autor, editora, genero, isbn, ano, idioma);
    listaLivros.push(novoLivro)
    localStorage.setItem('lista-livros', JSON.stringify(listaLivros))

    mostrarLivro()
    document.querySelector('form').reset();
}
console.log(listaEditoras)
function mostrarLivro() {
    let ulDosLivros = document.querySelector("#livrosAdd");

    ulDosLivros.innerHTML = "";

   for (let index = 0; index < listaLivros.length; index++) {
        let novoLi = document.createElement('li');

        novoLi.innerHTML = listaLivros[index].titulo;

        let botMostrar = document.createElement('button');
        botMostrar.innerHTML = 'Informações'
        botMostrar.addEventListener('click', () => {
            alert(listaLivros[index].exibirDados())
        });
        novoLi.appendChild(botMostrar);

        let botRemover = document.createElement('button');
        botRemover.innerHTML = 'Remover livro'
        botRemover.addEventListener('click', () => {
            if (confirm('Deseja remover o livro?')) {
                listaLivros.splice(index, 1);
            } else {
                alert('Certo, livro não removido!');
            }
            localStorage.setItem('lista-livros', JSON.stringify(listaLivros))
            mostrarLivro()
            
        });
        novoLi.appendChild(botRemover);
        ulDosLivros.appendChild(novoLi);
        
    }
}