// Init weather object
const weather = new Weather('Boston', 'MA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.error(err));
}