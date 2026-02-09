const apiKey = "ef84b8bd7fad9d20f9cd2ade72fbf182";

const weatherData = document.querySelector('.weather-data');

const cityName = document.getElementById('city-name');

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {

    e.preventDefault();

    getWeatherData(cityName.value);

});


async function getWeatherData(cityValue) {

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    const temperature = data.main.temp;

    const description = data.weather[0].description;


    const details = [
        `Feels Like : ${data.main.feels_like} °C`,
        `Humidity : ${data.main.humidity}%`,
        `Wind Speed : ${data.wind.speed} m/s`
    ];

    weatherData.querySelector('.temp').textContent =
        temperature + " °C";

    weatherData.querySelector('.desc').textContent =
        description;


    weatherData.querySelector(".details").innerHTML =
        details.map((item) => {
            return `<div>${item}</div>`;
        }).join("");

}

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function(){
    getWeatherData(cityName.value);
});