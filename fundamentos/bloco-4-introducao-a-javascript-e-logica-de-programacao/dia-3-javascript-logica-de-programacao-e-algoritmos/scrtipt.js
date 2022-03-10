//crie um algoritmo que retorne o fatorial de 10.

let fatorial = 10;
let resultado = 1;
for (let i = fatorial; i > 1; i -= 1) {
  resultado *= i;
}
console.log(resultado);
