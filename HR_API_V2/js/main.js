window.addEventListener("load", init);

//global vars
let apiUrl = "../public/apiLink.php";
let apiData = [];
let cards;
let cardSection;
let foodDetail;

function init() {
  cardSection = document.getElementById("cardSection");
  foodCards = document.getElementById("cardOption");
  foodDetail = document.getElementById("foodDetail");
  //foodDetail.addEventListener("click")
  getCard(apiUrl, cardMaker);
}

//fetchHandeler
function getCard(apiUrl, cardMaker) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(cardMaker)
    .catch(errorHandler);
}

//DOMHandeler
function cardMaker(data) {
  for (let index = 0; index < data.length; index++) {
    const dish = data[index];

    const foodCards = document.createElement("article");
    foodCards.id = "cardOptions";
    foodCards.classList.add("card-options");
    cardSection.appendChild(foodCards);

    //Title
    const dishTitle = document.createElement("h2");
    dishTitle.innerHTML = dish.name;
    foodCards.appendChild(dishTitle);

    //imgs
    const dishImg = document.createElement("img");
    dishImg.src = ".." + dish.image;
    dishImg.classList.add("card-img");
    foodCards.appendChild(dishImg);

    //onClick
  }
}
//errorHandeler
function errorHandler() {
  let error = document.createElement("div");
  error.classList.add("error");
  error.innerHTML = "Er is een error!";
  error.appendChild(cardSection);
}
