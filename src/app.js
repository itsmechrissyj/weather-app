function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidElement = document.querySelector("#humid");
  let windyElement = document.querySelector("#windy");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].main;
  humidElement.innerHTML = response.data.main.humidity;
  windyElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "2b605afdd2dbaf15fc530f7679deead1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
