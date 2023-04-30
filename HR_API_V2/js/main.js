window.addEventListener("load", init);

//global vars
let apiUrl = "apiLink.php";
let apiData = [];

function init() {
  fetchHandeler(apiUrl, getRecipe);
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

function getRecipe(data) {
  let recipeCards = document.createElement("div");
}
//DOMHandeler

//errorHandeler
function errorHandler() {
  let error = document.createElement("div");
  error.classList.add("error");
  error.innerHTML = "Er is een error!";
}
