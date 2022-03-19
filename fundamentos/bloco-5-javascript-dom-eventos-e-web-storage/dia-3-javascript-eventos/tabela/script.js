function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercício 1

let dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function diasDedezembro() {
  let uldays = document.getElementById("days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let elementLi = document.createElement("li");
    elementLi.innerText = dezDaysList[i];
    elementLi.classList = "day";
    uldays.appendChild(elementLi);

    if (
      elementLi.innerText === "24" ||
      elementLi.innerText === "25" ||
      elementLi.innerText === "31"
    ) {
      elementLi.classList.add("holiday");
    }
    if (
      elementLi.innerText === "4" ||
      elementLi.innerText === "11" ||
      elementLi.innerText === "18" ||
      elementLi.innerText === "25"
    ) {
      elementLi.classList.add("friday");
    }
  }
}
diasDedezembro();

//Exercício 2

function button(Feriados) {
  let bnt = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerHTML = "Feriados";
  bnt.appendChild(button);
}
button("Feriados");

//Exercício 3

function mudarCor() {
  let diasholiday = document.getElementsByClassName("holiday");
  let btnholiday = document.getElementById("btn-holiday");
  let corDosDias = "rgb(238,238,238)";
  let corNormal = "indigo";

  btnholiday.addEventListener("click", function () {
    for (let i = 0; i < diasholiday.length; i += 1) {
      if (diasholiday[i].style.backgroundColor === corNormal) {
        diasholiday[i].style.backgroundColor = corDosDias;
      } else {
        diasholiday[i].style.backgroundColor = corNormal;
      }
    }
  });
}
mudarCor();

//Exercício 4

function diaDaSacanagem(sexta) {
  let bnt = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  button.id = "btn-friday";
  button.innerHTML = "Sexta-feira";
  bnt.appendChild(button);
}
diaDaSacanagem("sexta-feira");

//Exercício 5

function holdaySexta() {
  let sextasfeiras = document.getElementsByClassName("friday");
  let button = document.getElementById("btn-friday");
  let corDoDia = "rgb(238,238,238)";
  let novaCor = "teal";

  button.addEventListener("click", function () {
    for (let i = 0; i < sextasfeiras.length; i += 1) {
      if (sextasfeiras[i].style.backgroundColor === novaCor) {
        sextasfeiras[i].style.backgroundColor = corDoDia;
      } else {
        sextasfeiras[i].style.backgroundColor = novaCor;
      }
    }
  });
}

holdaySexta();

//Exercício 6

function diaMouseOver() {
  let dias = document.querySelector("#days");
  //
  dias.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
}

function mouseout() {
  let lis = document.querySelector("#days");
  //
  lis.addEventListener("mouseout", function (event) {
    event.target.style.fontWeight = "200";
    event.target.style.fontSize = "20px";
  });
}

diaMouseOver();
mouseout();

//Exercício 7

function tarefas(string) {
  let span = document.createElement("span");
  let bnt = document.querySelector(".my-tasks");
  span.innerText = "cozinhar";
  bnt.appendChild(span);
}
tarefas("cozinhar");

//Exercício 8

function minhaDivtask(color) {
  let bnt = document.querySelector(".my-tasks");
  let div = document.createElement("div");
  
  
  div.style.background = color,
  div.classList = "task";
  bnt.appendChild(div);
}

minhaDivtask("green");


// Exercício 9

function selectTask() {
  let taskSelect = document.getElementsByClassName("task selected");
  let minhaTask = document.querySelector(".task");

  minhaTask.addEventListener("click", function (event) {
    if (taskSelect.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task ";
    }
  });
}
selectTask();

// 

function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();
