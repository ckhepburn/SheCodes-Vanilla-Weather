function searchCity(city) {
  let apiKey = '23ba5449atfff1c0e02c24fb555af64o';
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let serachInput = document.querySelector('#search-form-input');
  let cityElement = document.querySelector('#city');
  cityElement.innerHTML = serachInput.value;
  searchCity(serachInput.value);
}

let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener('submit', handleSearchSubmit);
