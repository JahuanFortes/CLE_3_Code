window.addEventListener("load", init);

//#region global vars
let apiUrl = "../public/apiLink.php";
let apiData = [];
let cards;
let cardSection;
let foodDetail;
let detailContent;
let favecardSection;
// #endregion global vars

//#region init
function init() {
  cardSection = document.getElementById("cardSection");
  foodCards = document.getElementById("cardOption");
  favecardSection = document.getElementById("favecardSection");

  detailDialog = document.getElementById("foodDetail");
  detailContent = detailDialog.querySelector(".modal-content");
  detailDialog.addEventListener("click", detailModalClickHandler);
  detailDialog.addEventListener("close", dialogCloseHandler);

  getCard(apiUrl, cardMaker);
  getFaveCards(apiUrl, cardMaker);
}
//#endregion init

//#region fetchHandeler
//fetchHandeler
function getCard(apiUrl, cardMaker) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => cardMaker(data, cardSection, false))
    .catch(errorHandler);
}
//#endregion fetchHandeler

//#region CardMaker
//DOMHandeler
function cardMaker(data, section, isFavorite) {
  for (let index = 0; index < data.length; index++) {
    const dish = data[index];

    //creates the cards
    const foodCards = document.createElement("article");
    foodCards.id = "cardOptions";
    foodCards.classList.add("card-options");

    section.appendChild(foodCards);

    //Title
    const dishTitle = document.createElement("h2");
    dishTitle.innerHTML = dish.name;
    foodCards.appendChild(dishTitle);

    //imgs
    const dishImg = document.createElement("img");
    dishImg.src = ".." + dish.image;
    dishImg.classList.add("card-img");
    foodCards.appendChild(dishImg);

    foodCards.appendChild(createDetailBtn(dish.id));

    //adds Favorite button to card
    if (isFavorite) {
      foodCards.appendChild(deleteBtn(dish.id));
    } else {
      foodCards.appendChild(createFaveBtn(dish.id));
    }
  }
}
//#endregion CardMaker

//#region Detail button
function createDetailBtn(id) {
  const detailbtn = document.createElement("button");
  detailbtn.classList.add("btn");
  detailbtn.innerText = "Show Details";
  detailbtn.addEventListener("click", () => showDetails(id));
  return detailbtn;
}
//#endregion Detail button

//#region details content

function showDetails(id) {
  fetch(`${apiUrl}?id=${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const dish = data[0];
      detailContent.innerHTML = "";

      const dishTitle = document.createElement("h1");
      dishTitle.innerHTML = dish.name;
      detailContent.appendChild(dishTitle);

      const dishImg = document.createElement("img");
      dishImg.src = ".." + dish.image;
      detailContent.appendChild(dishImg);

      const detailText = document.createElement("p");
      detailText.innerText = dish.details;
      detailContent.appendChild(detailText);

      detailDialog.showModal();
      cardSection.classList.add("dialog-open");
    })
    .catch(errorHandler);
}

function detailModalClickHandler(e) {
  if (e.target.nodeName === "DIALOG" || e.target.nodeName === "BUTTON") {
    detailDialog.close();
  }
}

function dialogCloseHandler(e) {
  cardSection.classList.remove("dialog-open");
}
//#endregion details content

//#region Favorite Button localstorage
//createfaveBtn
function createFaveBtn(id) {
  const favebtn = document.createElement("button");
  favebtn.classList.add("btn");
  favebtn.innerText = "add To Favorite";
  favebtn.addEventListener("click", () => addToFavorite(id));
  return favebtn;
}

//add to local storage
function addToFavorite(id) {
  //get all fav from local storage
  let favorites = localStorage.getItem("favoritelist");

  // if fav doesn't exist make empty list
  if (!favorites) {
    favorites = [];
  } else {
    // get fav list string and parse it into a list
    favorites = JSON.parse(favorites);
  }

  //if fav in not in the list add to local storage
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem("favoritelist", JSON.stringify(favorites));
  }
}
//#endregion Favorite Button LocalStorage

//#region Favorite collector
function getFaveCards(apiUrl, cardMaker) {
  let favorites = localStorage.getItem("favoritelist");
  if (!favorites) {
    favorites = [];
  } else {
    // get fav list string and  parse it into a list
    favorites = JSON.parse(favorites);
  }

  for (let index = 0; index < favorites.length; index++) {
    const dishID = favorites[index];

    fetch(`${apiUrl}?id=${dishID}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => cardMaker(data, favecardSection, true))
      .catch(errorHandler);
  }
}
//#endregion Favorite collector

//#region favoriteDeleteHandeler
function deleteBtn(id) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.innerText = "delete from Favorite";
  deleteBtn.addEventListener("click", () => deleteFromFavorite(id));
  return deleteBtn;
}

function deleteFromFavorite(id) {
  let favorites = localStorage.getItem("favoritelist");
  if (!favorites) {
    favorites = [];
  } else {
    favorites = JSON.parse(favorites);
  }
  let newFavorites = favorites.filter((v) => v != id);
  localStorage.setItem("favoritelist", JSON.stringify(newFavorites));
}
//#endregion favoriteDeleteHandeler

//#region errorHandeler
//errorHandeler
function errorHandler(data) {
  let error = document.createElement("div");
  error.classList.add("error");
  error.innerHTML = "Er is een error!";
  console.log(data);
}
//#endregion errorHandeler
