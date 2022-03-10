// Desenvolva um algoritmo que é capaz de inverter uma palavra

let word = 'tryber'

let inverso = ''

for(let i = word.length -1; i >= 0; i -= 1){
    inverso += word[i]
}

console.log(inverso);