//Crie uma função que receba uma frase e retorne qual a maior palavra

// let frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

// let resultado = frase.split(" ");
// let maior = 0;
// let palavra;

// resultado.forEach(function(n){
//     if ( maior < n.length){
//         maior = n.length;
//         palavra = n;
//     }
// });
// console.log(palavra);


const maiorPalavra = string => {
    let resultado = string.split(" ");
    let maior = 0;
    let result;
    resultado.forEach(function(n){
       if ( maior < n.length) {
           maior = n.length;
           result = n;
    }
  });
    return result;    
};

console.log(maiorPalavra(""));
    