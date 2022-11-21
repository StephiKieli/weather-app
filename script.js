let now = new Date();

let days = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

let day = days[now.getDay()];

let dayTimeH = now.getHours();
let dayTimeM = now.getMinutes();

let dayToday = document.querySelector("#current-day");
let timeTodayH = document.querySelector("#current-timeH");
let timeTodayM = document.querySelector("#current-timeS");
dayToday.innerHTML = day;
timeTodayH.innerHTML = dayTimeH;
timeTodayM.innerHTML = dayTimeM;

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#aktuell-temp");
  let weatherDescrip = document.querySelector("h5");
  let aktuellTown = document.querySelector("#searching-town");
  aktuellTown.innerHTML = response.data.name;
  weatherDescrip.innerHTML = response.data.weather[0].description;
  currentTemp.innerHTML = temp;
  console.log(response.data.name);
}

function newTown() {
  let inputTown = document.querySelector("#searching-input");
  let aktuellTown = document.querySelector("#searching-town");
  aktuellTown.innerHTML = inputTown.value;

  let apiKey = "dabf3a7434b4510eb851649c998cdcda";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputTown.value}&appid=${apiKey}&units=${units}&lang=de`;

  aktuellTown.innerHTML = inputTown.value;
  axios.get(url).then(showTemp);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "dabf3a7434b4510eb851649c998cdcda";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=de`;

  axios.get(url).then(showTemp);
}

function showcurrentTown() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchingTown = document.querySelector("#searching-form");
let currentTown = document.querySelector("#current");

searchingTown.addEventListener("submit", newTown);
currentTown.addEventListener("click", showcurrentTown);

function showFahrenheit(event) {
  let unitF = document.querySelector("#aktuell-temp");
  unitF.innerHTML = "70";
}

function showCelsius(event) {
  let unitC = document.querySelector("#aktuell-temp");
  unitC.innerHTML = "22";
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", showFahrenheit);

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", showCelsius);