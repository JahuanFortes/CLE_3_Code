window.addEventListener("load", init);

//global vars
let apiUrl = "apiLink.php";
let apiData = [];

function init() {
  fetchHandeler(apiUrl);
}

//fetchHandeler
function fetchHandeler(apiUrl, successHandler) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(successHandler)
    .catch(errorHandler);
}

//DOMHandeler
function cardMaker(data) {
  for (let cards of data.results) {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(fetchHandeler)
      .catch(errorHandler);
  }
  let cardChoice = document.createElement("article");
  cardChoice.innerHTML = card.name;
  cardChoice.value = card.id;
  cards.appendChild(cardChoice);
}

//errorHandeler
function errorHandler() {
  let error = document.createElement("div");
  error.classList.add("error");
  error.innerHTML = "Er is een error!";
}
