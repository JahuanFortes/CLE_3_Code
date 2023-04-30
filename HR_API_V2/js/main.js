window.addEventListener("load", init);

//global vars
let apiUrl = "apiLink.php";
let apiData = [];

//fetchHandeler
function fetchHandeler(params) {
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

//errorHandeler
