//crie um algoritmo que retorne o fatorial de 10.

let fatorial = 10

//Na linha 6, igualando o resultado com o fatorial porque a let resultado será utilizada como objeto multiplicador na operação de cálculo;
let resultado = fatorial;

//Na linha 9 ainda, especificamos que para cada ciclo do laço de repetição, incrementaremos a variável i em 1 através de i += 1
for (let i = 1; i < fatorial; i += 1){

 //Na linha 12, fazemos através do operador de atribuição de multiplicação (*=) a multiplicação do valor da variável resultado pelo valor da variável i, e atribuímos o resultado da multiplicação à própria variável resultado;   
    resultado *= i;
}

//Na linha 16, temos a apresentação do resultado da operação (3628800) através do console.log.
console.log(resultado);