const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidityElem = document.querySelector('#humidity');

async function getApi() {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=92008,us&appid=3b1b19053e48d18e28493beef10873c1&units=imperial`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
          } else {
              throw Error(await response.text());
          }
        } catch (error) {
            console.log(error);
        }
      }
    
function displayResults(weatherData) {

    let wDesc = weatherData.weather[0].description;
    let descFormat = wDesc.split(' ').map(capitalize).join(' ');
    
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
    weatherIcon.setAttribute("alt", wDesc);
    document.querySelector('#currently').textContent = descFormat;
    humidityElem.innerHTML = `Humidity: ${weatherData.main.humidity}%`;

}

function capitalize(s) {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

getApi();