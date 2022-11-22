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
  let currentTemp = (document.querySelector("#aktuell-temp").innerHTML = temp);
  let weatherDescrip = (document.querySelector("h5").innerHTML =
    response.data.weather[0].description);
  let aktuellTown = (document.querySelector("#searching-town").innerHTML =
    response.data.name);

  console.log(response.data.name);
}

function newTown(event) {
  event.preventDefault();
  let inputTown = document.querySelector("#searching-input").value;
  let aktuellTown = document.querySelector("#searching-town");
  aktuellTown.innerHTML = inputTown.value;
  let apiKey = "dabf3a7434b4510eb851649c998cdcda";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputTown}&appid=${apiKey}&units=${units}&lang=de`;

  aktuellTown.innerHTML = inputTown.value;
  axios.get(url).then(showTemp);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "dabf3a7434b4510eb851649c998cdcda";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}&lang=de`;

  axios.get(url).then(showTemp);
}

function showcurrentTown() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchingTown = document.querySelector("#searching-form");
debugger;
let currentTown = document.querySelector("#current");
console.log(searchingTown);

searchingTown.addEventListener("sumbit", newTown);
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
