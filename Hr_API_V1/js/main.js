// window.addEventListener("load", init);
//Globals vars
// let apiUrl = "includes/actions.php";
// let gallery;
// let apiData = [];
// let dialogBox;

// //DOM
// function init() {
//   gallery = document.getElementById("pokemon-gallery");
//   gallery.addEventListener("click", showShiny);
//   dialogBox = document.getElementById("pokemon-detail");
//   dialogBox.addEventListener("click", closeDialogBox);

//   //Start the application with loading the API data
//   getSport(url, ajaxSuccessHandler);
// }

// //Fetch
// function getSport() {
//   fetch(url, ajaxSuccessHandler)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     })
//     .then(ajaxSuccessHandler)
//     .catch(ajaxErrorHandler);
// }

// //create
// function ajaxSuccessHandler(data) {
//   for (let pokemon of data.results) {
//     let pokemonCard = document.createElement("div");
//     pokemonCard.classList.add("pokemon-card");
//     pokemonCard.dataset.name = pokemon.name;

//     //Append Pokémon card to the actual HTML
//     gallery.appendChild(pokemonCard);

//     //Retrieve the detail information from the API
//     fetch(pokemon.url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response.json();
//       })
//       .then(fillPokemonCard)
//       .catch(ajaxErrorHandler);
//   }
// }

// // error
// function ajaxErrorHandler(data) {
//   let error = document.createElement("div");
//   error.classList.add("error");
//   error.innerHTML =
//     "Er is helaas iets fout gegaan met de API, probeer het later opnieuw";
//   gallery.before(error);
// }

window.addEventListener("load", init);

//global vars
let apiUrl = "includes/actions.php";
let apiData = [];

//DOMHandeler
function init() {}

//fetchHandeler
function getSport() {
  fetch(url).then((Response) => {
    if (!Response.ok) {
      throw new Error();
    }
  });
}

//errorHandeler
function errorHandeler() {
  let error = document.createElement("ul");
  error.classList.add("error");
  error.innerHTML = "Er is een error!";
}
