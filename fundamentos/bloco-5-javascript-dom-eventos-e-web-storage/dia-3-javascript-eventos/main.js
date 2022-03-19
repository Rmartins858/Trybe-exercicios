const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// A classe .tech estava com uma propriedade

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let l = document.getElementsByTagName("li");
// criei uma variavel para guardar minha tag li

function addClass(event) {
  // o for esta verificando se na minha lista possui alguma classe .tech
  for (let i = 0; i < l.length; i += 1) {
    // esse if esta fazendo uma condição se houver na minha lista alguma classe "tech"
    if (l[i].className === "tech") {
      //aqui esta sendo removida a classe tech
      l[i].classList.remove("tech");
    }
  }

  //esse evento para pegar as informações
  event.target.className = "tech";
}

// esse for foi criado para passar por toda minha lista e ser adicionado o evento de 'click'
for (let z = 0; z < l.length; z += 1) {
  l[z].addEventListener("click", addClass);
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event) {
    const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value;
  });



// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function() {
    window.location.replace('https://www.linkedin.com/in/rafael-martins-b2352917b/');
  });
  


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
  });

  myWebpage.addEventListener('mouseout', function(event) {
    event.target.style.color = 'unset';
  });

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
