let bnt = document.getElementById('botao');
let contador = document.getElementById('cont');

let clickCont = 0;

bnt.addEventListener('click',  function(){
    clickCont++;
    contador.innerHTML = clickCont;
})
