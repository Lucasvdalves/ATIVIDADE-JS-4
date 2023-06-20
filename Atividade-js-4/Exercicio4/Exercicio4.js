let n = 10; // Número limite da sequência de Fibonacci
let a = 0;
let b = 1;

console.log("Sequência de Fibonacci até", n + ":");

while (a <= n) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}
