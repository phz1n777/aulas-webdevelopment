const listaFilmes = document.querySelector('#listaFilmes')
// const filmeInput = document.querySelector('#filmeInput')
// const btn1 = document.querySelector('button')
const filmes = [{
    nome: 'Harry Potter',
    lancamento: 2001,
    genero: 'fantasia',
    atores:{
        ator1: 'Daniel RadCliff'
    }
},{
    nome: 'Vovozona',
    lancamento: 2000,
    genero: 'comedia', 
}]
// filmes.push('Branquelas') // Adiciona um elemento na lista
// filmes.pop() //Remove o ultimo elemento da lista

// btn1.addEventListener('click',()=>{
//     let.filmeDigitado = filmeInput.value
//     filmes.push(filmeDigitado)
// })

window.onload = () => {
    for(let i=0; i < filmes.length; i++){
        let itemLista = document.createElement('li'); //criando o elemento
        listaFilmes.append(itemLista) //adicionado
        itemLista.innerHTML = filmes[i].nome

        let anoLancamento = document.createElement('span')
        itemLista.append(anoLancamento)
        anoLancamento.innerHTML = filmes[i].lancamento
    }
}
// window.onload = function carregarFilmes abreviado o function para ()=>{...}

filmes.forEach((meuElemento)=>{
    console.log(meuElemento.nome + 'Vai curintia')
})