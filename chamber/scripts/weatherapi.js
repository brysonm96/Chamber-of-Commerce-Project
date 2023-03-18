const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#speed')
const windChill = document.querySelector('#chill')

async function getApi() {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=37174,us&appid=3b1b19053e48d18e28493beef10873c1&units=imperial`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            displayChill(data);
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
    let wSpeed = `${weatherData.wind.speed.toFixed(0)}`;
    
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
    weatherIcon.setAttribute("alt", wDesc);

    document.querySelector('#currently').textContent = descFormat;
    document.querySelector("#speed").innerHTML = wSpeed;

}

function capitalize(s) {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

function displayChill(windChillData){

    const temp = `${windChillData.main.temp.toFixed(0)}`;
    const speed = `${windChillData.wind.speed.toFixed(0)}`;

    if (temp <= 50 && speed > 3.0){
    calc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 *  temp * Math.pow(speed,0.16));
    }

    else {
        document.querySelector("#chill").innerHTML = "N/A";
    }

    document.querySelector("#chill").innerHTML = calc.toFixed(1);
}

getApi();