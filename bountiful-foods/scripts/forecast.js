const url = 'https://api.openweathermap.org/data/2.5/forecast?zip=92008,us&appid=3b1b19053e48d18e28493beef10873c1&units=imperial';

// Make a request to the OpenWeatherMap API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const forecast = document.querySelector("#forecast");
    
    // Display the temperature forecast for the next 3 days
    for (let i = 0; i < 3; i++) {
        const date = new Date(data.list[i*8].dt_txt); // use i*8 to get the weather forecast for every 24 hours (3-hour intervals)
        const temp = data.list[i*8].main.temp; // use i*8 to get the temperature at the corresponding time
        
        const options = { weekday: 'long' }; // options object for displaying only the weekday
        const weekday = new Intl.DateTimeFormat('en-US', options).format(date); // format the date to display only the weekday
      
      const div = document.createElement("div"); // create a new div for each daily forecast
      div.setAttribute("id", "day" + (i+1)); // set the id of the div to "day1", "day2", "day3", etc.
      
      div.innerHTML = `
      <p>${weekday}</p>
      <p>Temperature: ${temp} &#8457;</p>`;
        
      forecast.appendChild(div); // append the new div to the forecast element
    }
  })
  .catch(error => console.error(error));