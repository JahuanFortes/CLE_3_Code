window.addEventListener("load", init);

//global vars
let apiUrl = "../public/apiLink.php";
let apiData = [];
let cards;
let cardSection;

function init() {
  cardSection = document.getElementById("cardSection");
  foodCards = document.getElementById("cardOption");
  getCard(apiUrl);
}

//fetchHandeler
function getCard(apiUrl, fetchHandeler) {
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

//DOMHandeler
function cardMaker(data) {
  for (Dishes of data.results) {
    const foodCards = document.createElement("article");
    foodCards.id = "cardOptions";
    foodCards.classList.add("card-options");
    cardSection.section.appendChild(foodCards);

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
