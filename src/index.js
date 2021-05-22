let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hh = now.getHours();
let mm = now.getMinutes();
let h4 = document.querySelector("h4");
h4.innerHTML = `${day} ${hh}:${mm}`;

function search(event) {
  event.preventDefault();
  let changeCity = document.querySelector("#city-input");
  let cityElement = document.querySelector("h1");
  if (changeCity.value) {
    cityElement.innerHTML = `${changeCity.value}`;
    searchCity(changeCity.value);
  } else {
    cityElement.innerHTML = null;
    alert("Please type a city");
  }
}

function searchCity(city) {
  let apiKey = "9b9cec861e1473677320930f6fb39da4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function showTemperature(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let h2 = document.querySelector("#temp");
  h2.innerHTML = Math.round(response.data.main.temp);
}
let apiKey = "9b9cec861e1473677320930f6fb39da4";
let cityName = document.querySelector("#city-input").value;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial`;
axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

let form = document.querySelector("form");
form.addEventListener("submit", search);

function currentTemperature(response) {
  let city = document.querySelector("h1");
  city.innerHTML = response.data.name;
  let temp = document.querySelector("#temp");
  temp.innerHTML = Math.round(response.data.main.temp);
}
function showLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "9b9cec861e1473677320930f6fb39da4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(currentTemperature);
}
navigator.geolocation.getCurrentPosition(showLocation);
