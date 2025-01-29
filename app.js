const apiKey = '89e7e476a54e18d79ecbfa77036e9b0e'; // Replace with your OpenWeatherMap API key

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city');
    }
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
        } else {
            displayWeather(data);
        }
    } catch (error) {
        alert('Error fetching weather data');
    }
}

function displayWeather(data) {
    const cityName = document.getElementById('cityName');
    const weatherDesc = document.getElementById('weatherDesc');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');

    cityName.textContent = data.name + ', ' + data.sys.country;
    weatherDesc.textContent = data.weather[0].description;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
