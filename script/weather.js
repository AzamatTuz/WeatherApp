//  ########### VARIABLES ###########

const apiKey = 'fb2cff02b71168e9f0c68fd3f83d168a';
let buttons = document.querySelectorAll('.cityName');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const windSpeed = document.getElementById('windSpeed');
const weatherIcon = document.querySelectorAll('.weather-image');
const weatherText = document.getElementById('weather');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

//  ########### EVENTS ###########

searchBtn.addEventListener('click', () => {
    fetchData(searchInput.value);
    searchInput.value = ''
})

if (localStorage.getItem('cityName')) {
    temp.textContent = localStorage.getItem('temp');
    cityName.textContent = localStorage.getItem('cityName');
    weatherText.textContent = localStorage.getItem('weather');
    windSpeed.textContent = localStorage.getItem('windSpeed');
    fetchData(localStorage.getItem('city'))
}

//  ########### FUNCTIONS ###########

async function fetchData(city) {
    try {
        localStorage.setItem('city', city)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;`);

        if (!response.ok) {
            throw new Error('Postartdy alu mumkin emes');
        }


        const data = await response.json();
        console.log(data);
        

        localStorage.setItem('temp', Math.round(data.main.temp - 273.15) + '°C');
        localStorage.setItem('cityName', data.name);
        localStorage.setItem('weather', data.weather[0].main);
        localStorage.setItem('windSpeed', Math.round(data.wind.speed) + ' km/h');

        temp.textContent = Math.round(data.main.temp - 273.15) + '°C';
        cityName.textContent = data.name;
        weatherText.textContent = data.weather[0].main;
        windSpeed.textContent = Math.round(data.wind.speed) + ' km/h';

    } catch (error) {
        console.error(error);

    }
}

function suffleImage() {

    weatherIcon.forEach(card => {

        const num = [...Array(weatherIcon.length).keys()]
        const random = Math.floor(Math.random() * weatherIcon.length)

        card.style.order = num[random];
    })
};



buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        fetchData(e.target.textContent);
        suffleImage()
    })
})

