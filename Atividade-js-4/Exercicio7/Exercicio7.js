// Função para adicionar um elemento ao final do array
function adicionarElemento(array, elemento) {
    array.push(elemento); // Utiliza o método push para adicionar o elemento ao final do array
    return array; // Retorna o array atualizado
  }
  
  // Função para remover o último elemento do array
  function removerUltimoElemento(array) {
    return array.pop(); // Utiliza o método pop para remover e retornar o último elemento do array
  }
  
  // Função para remover elementos dentro de um intervalo no array
  function removerElementosIntervalo(array, indiceInicial, indiceFinal) {
    array.splice(indiceInicial, indiceFinal - indiceInicial + 1); // Utiliza o método splice para remover os elementos do intervalo
    return array; // Retorna o array atualizado
  }
  
  // Exemplo de uso das funções
  let meuArray = [1, 2, 3, 4, 5];
  
  console.log(adicionarElemento(meuArray, 6)); // Saída: [1, 2, 3, 4, 5, 6]
  
  console.log(removerUltimoElemento(meuArray)); // Saída: 6
  console.log(meuArray); // Saída: [1, 2, 3, 4, 5]
  
  console.log(removerElementosIntervalo(meuArray, 1, 3)); // Saída: [1, 5]
  