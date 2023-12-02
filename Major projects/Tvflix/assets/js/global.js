//  add multiple event listener

const addEventOnElements = function (elements, event, callback) {
  for (element of elements) element.addEventListener(event, callback);
};

// toggle search in small screen
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", () =>
  searchBox.classList.toggle("active")
);

/**
 * store movieId in local storage
 * when you click any movie card
 */

const getMovieDetail = function (movieId) {
  window.localStorage.setItem("movieId", String(movieId));
};

const getMovieList = function (urlParam, genreName) {
  window.localStorage.setItem("urlParam", urlParam);
  window.localStorage.setItem("genreName", genreName);
}