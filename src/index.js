const apiKey = 'b4c737ebf27b5879306544b3f666163c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

let query = fetch(`${apiUrl}?APPID=${apiKey}&q=Brno&units=metric&lang=cz`);

query
.then(response => response.json())
.then(displayWeather);

function displayWeather(data) {
	const cityEl = document.querySelector('#mesto');
	const weatherEl = document.querySelector('#pocasi');
	const tempEl = document.querySelector('#teplota');
	const iconEl = document.querySelector('#ikona');
	cityEl.textContent = data.name;
	weatherEl.textContent = data.weather[0].description;
	tempEl.textContent = data.main.temp;
	iconEl.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}
