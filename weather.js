

function weatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url).then(response => response.json()).then(data => {
        city.innerText = `${data.name}` + '\n';
        weather.innerText = `${data.weather[0].main}` +`\n`;
        temp = Math.floor(data.main.temp - 273.15)
        temprature.innerText = `${temp}` + '°C\n';
        
    });
}

function onGeoError() {
    console.log("Failed to get location");
}

function location_latlon(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    weatherData(lat, lon);
}