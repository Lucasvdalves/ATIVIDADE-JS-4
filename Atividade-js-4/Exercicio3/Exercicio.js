let numero = 17; // Altere o valor da variável "numero" conforme necessário

let divisor = 2;
let primo = true;

do {
  if (numero % divisor === 0 && numero !== divisor) {
    primo = false;
    break;
  }
  divisor++;
} while (divisor < numero);

if (primo) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}
