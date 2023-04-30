window.addEventListener("load", init);

// global vars
let apiUrl = "apiLink.php";
let apiData = [];
let artclOptions;
let tagsSelector;
let newsArticleSection;
let selectedTag;

//DOMHandeler
function init() {
  tagsSelector = document.getElementById("tags-selec");
  newsArticleSection = document.getElementById("newsArt");
  tagsSelector.addEventListener("change", handelTagChange);

  getApi(apiUrl, getSport);
}

//fetchHandeler
const getApi = (apiUrl, successHandler) => {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(successHandler)
    .catch(ajaxErrorHandler);
};

//ListHandeler
function getSport(data) {
  tagsSelector.innerHTML = "";
  for (let sport of data) {
    let optElement = document.createElement("option");
    optElement.innerText = sport.name;
    optElement.value = sport.id;
    tagsSelector.appendChild(optElement);
  }
}

//DOMcard
function cardOptions(data) {
  newsArticleSection.innerHTML = "";

  data.forEach((element) => {
    console.log(element);
    let article = createArticle({
      title: element.title,
      image: "#",
      imgName: "img_here",
      text: element.desription,
      id: element.id,
    });
    newsArticleSection.innerHTML += article;
  });
}

function createArticle({ title, image, imgName, text, id }) {
  return `<article id="card">
        <div>
          <h2>${title}</h2>
          <img src="${image}" alt="${imgName}" />
        </div>
        <div id="cardSelect">
          <p>
          ${text}  
          </p>
        </div>
        <button onclick="addToFavorite(${id})" id="favoriet">Doe mee!</button>
        <button onclick="deleteFromFavorite(${id})" id="favoriet">Verwijderen!</button>
      <hr>
      </article>`;
}

//TagChanger
async function handelTagChange(e) {
  selectedTag = e.target.value;
  let response = await fetch(apiUrl + `?id=${selectedTag}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  let data = await response.json();
  cardOptions(data);
}

//favoriteHandeler
function addToFavorite(id) {
  let favorites = localStorage.getItem("favoritelist");
  if (!favorites) {
    favorites = [];
  } else {
    favorites = JSON.parse(favorites);
  }
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem("favoritelist", JSON.stringify(favorites));
  }
}

//favoriteDeleteHandeler
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

//errorHandeler
function ajaxErrorHandler() {
  let error = document.createElement("div");
  error.classList.add("error");
  error.innerHTML = "Er is een error!";
}
