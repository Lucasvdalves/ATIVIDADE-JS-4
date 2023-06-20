function traduzirCorEmPortugues(corEmIngles) {
    var corEmPortugues;
  
    switch (corEmIngles.toLowerCase()) {
      case 'red':
        corEmPortugues = 'vermelho';
        break;
      case 'blue':
        corEmPortugues = 'azul';
        break;
      case 'green':
        corEmPortugues = 'verde';
        break;
      case 'yellow':
        corEmPortugues = 'amarelo';
        break;
      case 'purple':
        corEmPortugues = 'roxo';
        break;
      default:
        corEmPortugues = 'Cor não encontrada.';
        break;
    }
  
    return corEmPortugues;
  }
  
  // Exemplos de uso:
  console.log(traduzirCorEmPortugues('red'));     // Saída: vermelho
  console.log(traduzirCorEmPortugues('BLUE'));    // Saída: azul
  console.log(traduzirCorEmPortugues('Green'));   // Saída: verde
  console.log(traduzirCorEmPortugues('yellow'));  // Saída: amarelo
  console.log(traduzirCorEmPortugues('Purple'));  // Saída: roxo
  console.log(traduzirCorEmPortugues('pink'));    // Saída: Cor não encontrada.
  