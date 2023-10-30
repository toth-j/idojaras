const APIkey = '2a2b620e45790ec1f74f3a48ec046c24';
const description = document.getElementById('description');
const temperature = document.getElementById('temperature');
const weatherIcon = document.getElementById('weather-icon');
const form = document.querySelector("form");
fetchWeatherData()

function fetchWeatherData() {
    let city = document.getElementById("city").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Status code: ' + response.status);
            }
        })
        .then(data => {
            description.textContent = data.weather[0].description;
            temperature.textContent = data.main.temp;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        })
        .catch(error => {
            alert(error);
        });
}

form.onsubmit = function (e) {
    e.preventDefault();
    fetchWeatherData();
    city.focus();
}