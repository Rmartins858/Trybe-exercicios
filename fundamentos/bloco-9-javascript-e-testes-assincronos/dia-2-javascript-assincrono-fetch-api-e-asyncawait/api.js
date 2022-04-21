const url = 'https://api.coincap.io/v2/assets';

function coin() {
  fetch(url)
    .then((resposta) => resposta.json())
    .then((data) => {
      for (let i = 0; i <= 9; i += 1) {
        funcAppend(data.data[i]);
      }
    })
    .catch((error) => error.toString());
}
coin();

function funcAppend(element) {
  const eliis = document.createElement('li');
  eliis.innerText = `${element.name} (${element.symbol}): ${Number(
    element.priceUsd
  ).toFixed(2)}`;
  const minhaOl = document.getElementById('coins');
  minhaOl.appendChild(eliis);
}
