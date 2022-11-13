function formatDate(timestamp) {
  //calculate the date
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    let hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    let minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let visibilityElement = document.querySelector("#visibility");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  visibilityElement.innerHTML = response.data.visibility;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "608a52244b19997a96ca6cf96621da58";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
