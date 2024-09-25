

const getWeather = async (cityName) => {
  let req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=b4c426c91009e3429c4af53c61fd6e9c&q=${cityName}&units=metric`
  );
  let res = await req.json();
  console.log(res);
  ui(res);
};

const getWeatherByLocation = async (lat, long) => {
  let req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`
  );
  let res = await req.json();
  console.log(res);
  ui(res);
};

const ui = (data) => {
  let temp = `
      <div class="weather-display">
          <h2>Weather App</h2>
          <div class="weather-info">
              <div class="icon">
                    <img src="./252035.png" alt="cloudy icon">
              </div>
              <div class="temperature">
                  <h1>${data.main.temp}°C</h1>
                  <p>${data.weather.description}</p>
                  <p>${data.name}, ${data.sys.country}</p>
              </div>
              <div class="details">
                  <p>Feels like: ${data.main.feels_like}°C</p>
                  <p>Humidity: ${data.main.humidity}%</p>
              </div>
          </div>
      </div>`;
  document.getElementById("Weather").innerHTML = temp;
};

const handleSubmit = (e) => {
  e.preventDefault();
  let cityName = document.getElementById("city").value;

  getWeather(cityName);
};
document.getElementById("form").addEventListener("submit", handleSubmit);

const getLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(position);
    getWeatherByLocation(lat, lon);
  });
};