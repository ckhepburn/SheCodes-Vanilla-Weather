function handleSearchSubmit(event) {
  event.preventDefault();
  let serachInput = document.querySelector('#search-form-input');
  let cityElement = document.querySelector('#city');
  cityElement.innerHTML = serachInput.value;
}

let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener('submit', handleSearchSubmit);
