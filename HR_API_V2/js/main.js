window.addEventListener("load", init);

//global vars
let apiUrl = "../public/apiLink.php";
let apiData = [];
let cards;
let cardSection;
function init() {
  cardSection = document.getElementById("cardSection");
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
  for (cards of data.results) {
    let cardChoice = document.createElement("article");
    cardChoice.innerHTML = cards.name;
    cardChoice.value = cards.id;
    cards.appendChild(cardSection);

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
}

//errorHandeler
function errorHandler() {
  let error = document.createElement("div");
  error.classList.add("error");
  error.innerHTML = "Er is een error!";
  error.appendChild(cardSection);
}
