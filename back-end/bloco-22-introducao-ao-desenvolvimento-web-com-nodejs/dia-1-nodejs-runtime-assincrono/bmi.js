
const pesoKg = 100;
const alturaCm = 185; 


function calculadoraIMC(peso, altura){
    console.log(`Altura: ${altura}, peso: ${peso}`);

    const alturaEmmetros = altura / 100;
    const pesoAoQUadrado = alturaEmmetros ** 2;

    const IMC = altura / pesoAoQUadrado;

    return IMC;
}


function main(){
    const IMC = calculadoraIMC(pesoKg, alturaCm);

    console.log(`IMC : ${IMC.toFixed(2)}`);
}

main();