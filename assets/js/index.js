function refreshWeather(response) {
	let temperatureElement = document.querySelector("#weather-temperature-value");
	let temperature = response.data.temperature.current;

	let cityElement = document.querySelector("#weather-city");
	cityElement.innerHTML = response.data.city;

	temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
	let apiKey = "007o490fa9c43ta708a74ba7cfaf7bcb";
	let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
	axios.get(apiUrl).then(refreshWeather);
}

function searchSubmit(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-form-input");

	searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Amsterdam");
