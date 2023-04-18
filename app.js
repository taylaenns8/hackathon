nyApiUrl = `http://api.weatherstack.com/current?access_key=6ee4db2d2c6b532adb42c7e983767c3e&query=New%20York`;

fetch(nyApiUrl)
      .then(response => response.json())
      .then(data => {
        const iconUrl = data.current.weather_icons[0];
        const name = data.current.name;
        const temperature = data.current.temperature + " °C";
        const description = data.current.weather_descriptions[0];
  
        document.getElementById('weather-icon').setAttribute('src', iconUrl);
        document.getElementById('city-name').textContent = name;
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('description').textContent = description;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });

function getWeatherData(cityName) {
    const apiKey = '6ee4db2d2c6b532adb42c7e983767c3e';
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const iconUrl = data.current.weather_icons[0];
        const name = data.current.name;
        const temperature = data.current.temperature + " °C";
        const description = data.current.weather_descriptions[0];
  
        document.getElementById('weather-icon').setAttribute('src', iconUrl);
        document.getElementById('city-name').textContent = name; 
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('description').textContent = description;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  
  const searchForm = document.querySelector('form[role="search"]');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const cityName = searchForm.querySelector('input[type="search"]').value;

  getWeatherData(cityName);
});

$('.nav-link').on('click', getLocation);

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    // Use the position object to get the user's current latitude and longitude
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Use the latitude and longitude to generate a link or map to nearby locations
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.location.href = url;
  }

