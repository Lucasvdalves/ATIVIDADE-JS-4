// Definindo o array de objetos de produtos
const produtos = [
    { nome: 'Camiseta', preco: 29.99 },
    { nome: 'Calça', preco: 59.99 },
    { nome: 'Meias', preco: 9.99 },
    { nome: 'Tênis', preco: 129.99 }
  ];
  
  // Variáveis para armazenar o total de produtos e o valor total
  let totalProdutos = 0;
  let valorTotal = 0;
  
  // Percorrendo o array de produtos
  produtos.forEach(produto => {
    console.log(`Nome: ${produto.nome} - Preço: ${produto.preco}`);
    totalProdutos++;
    valorTotal += produto.preco;
  });
  
  // Imprimindo o total de produtos e o valor total
  console.log(`Total de produtos: ${totalProdutos}`);
  console.log(`Valor total: ${valorTotal}`);
  