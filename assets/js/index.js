function refreshWeather(response) {
	let cityElement = document.querySelector("#weather-city");
	let temperatureElement = document.querySelector("#weather-temperature-value");
	let temperature = response.data.temperature.current;
	let timeElement = document.querySelector("#weather-time");
	let date = new Date(response.data.time * 1000);
	let descriptionElement = document.querySelector("#weather-description");
	let humidityElement = document.querySelector("#weather-humidity");
	let windElement = document.querySelector("#weather-wind");
	let windSpeed = response.data.wind.speed;

	cityElement.innerHTML = response.data.city;

	temperatureElement.innerHTML = Math.round(temperature);
	timeElement.innerHTML = formatDate(date);
	descriptionElement.innerHTML = response.data.condition.description;
	humidityElement.innerHTML = response.data.temperature.humidity;
	windElement.innerHTML = Math.round(windSpeed);
}

function formatDate(date) {
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[date.getDay()];
	let hours = date.getHours();
	let minutes = date.getMinutes();

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	return `${day} ${hours}:${minutes}`;
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
