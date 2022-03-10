// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ["java", "javascript", "python", "html", "css"];

let maior = "";
let menor = array[0];

for (let i = 0; i < array.length; i++) {
  if (maior.length < array[i].length) {
    array = maior[i];
  }

  if (menor.length > array[i].length) {
    menor = array[i];
  }
}

console.log(maior);
console.log(menor);
