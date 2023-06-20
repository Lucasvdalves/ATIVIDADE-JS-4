function calculadora(num1, num2, operacao) {
    return operacao(num1, num2);
  }
  
  // Funções de operação matemática
  function adicao(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    return a / b;
  }
  
  // Exemplos de uso
  console.log(calculadora(5, 3, adicao)); // Resultado: 8
  console.log(calculadora(10, 4, subtracao)); // Resultado: 6
  console.log(calculadora(6, 2, multiplicacao)); // Resultado: 12
  console.log(calculadora(8, 2, divisao)); // Resultado: 4
  