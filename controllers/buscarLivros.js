const livros = require('../database')
const read = require('readline-sync')

const buscarLivros = () => {

    const opcaoInicial = read.question('Deseja buscar por categoria? S/N ').toUpperCase()

    if (opcaoInicial === 'S') {
        const categorias = livros.map(livro => livro.categoria)
        let naoRepetidos = categorias.filter((este, i) => categorias.indexOf(este) === i);
        console.table(naoRepetidos);
       
        const inputCategoria = read.question('Digite uma categoria conforme tabela acima: ')

        const confirmacao = read.question('Tem certeza? S/N ').toUpperCase()
        
        if (confirmacao === 'S') {
            console.clear()
            const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
            console.table(livrosFiltrados)
            } else 
            console.log('Até a próxima!')
    } else
        console.log('Até a próxima!')
}

module.exports = buscarLivros
