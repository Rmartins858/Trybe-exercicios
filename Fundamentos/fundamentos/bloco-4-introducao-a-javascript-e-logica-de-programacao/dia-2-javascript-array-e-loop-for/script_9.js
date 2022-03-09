let limite = 25;

let arryNumeros = [];

for(let i = 1; i <= limite; i += 1 ){
    arryNumeros.push(i);
}

console.log(arryNumeros);

for(let i = 1; i <= limite; i += 1 ){
    arryNumeros[i] = arryNumeros[i] / 2
 }

 console.log(arryNumeros);
 