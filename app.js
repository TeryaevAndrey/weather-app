const parameters = document.querySelector(".parameters");
const temp = document.querySelector("#temp");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchValue");
const locationTitle = document.querySelector("#locationTitle");
const weatherInner = document.querySelector(".weather__inner");
const weatherContent = document.querySelector(".weather__content");
const weatherImg = document.querySelector(".weather__img");
const notFound = document.querySelector(".not-found");
const loader = document.querySelector(".loader");
const time = document.querySelector("#time");

const key = "c4206edf19f35fc184f01a77bb9de40d";

searchForm.onsubmit = (e) => {
  e.preventDefault();

  getWeatherInfo(searchInput.value);
  localStorage.setItem("city", JSON.stringify(searchInput.value));

  searchInput.value = "";
};

const parameterTemplate = (iconPath, title, value) => {
  let html = `
      <div class="parameter">
        <img class="weather__parameter-icon" src="${iconPath}" alt="parameter" width="20" height="20">
        <div class="parameter__info">
          <p class="parameter-info-title">${title}</p>
          <p class="parameter__info-value">${value}</p>
        </div>
      </div>
  `;

  return parameters.insertAdjacentHTML("beforeend", html);
};

const getWeatherInfo = async (city) => {
  weatherInner.style.display = "none";
  loader.style.display = "flex";

  try {
    let isDay;

    parameters.innerHTML = ``;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );

    const data = await res.json();
    const date = new Date(data.dt * 1000);
    const toUtc = date.getTime() + date.getTimezoneOffset() * 60000;
    const currentLocaleTime = toUtc + 1000 * data.timezone;
    const selectedDate = new Date(currentLocaleTime);
    const hours = selectedDate.getHours();

    time.textContent = selectedDate.toLocaleTimeString().slice(0, 5);

    if (hours < 20 && hours > 6) {
      isDay = true;
    } else {
      isDay = false;
    }

    const weatherDescription = data.weather[0].description;

    if (isDay === true) {
      switch (weatherDescription) {
        case "clear sky":
        case "few clouds":
        case "scattered clouds":
        case "broken clouds":
          weatherImg.src = "./img/weather/day/cloudy.svg";
          break;
        case "shower rain":
        case "rain":
          weatherImg.src = "./img/weather/day/rain.svg";
          break;
        case "thunderstorm":
          weatherImg.src = "./img/weather/day/shtorm.svg";
          break;
        case "snow":
          weatherImg.src = "./img/weather/day/snow.svg";
          break;
        case "mist":
          weatherImg.src = "./img/weather/mist.svg";
          break;
      }
    } else {
      switch (weatherDescription) {
        case "clear sky":
        case "few clouds":
        case "scattered clouds":
        case "broken clouds":
          weatherImg.src = "./img/weather/night/cloudy.svg";
          break;
        case "shower rain":
        case "rain":
        case "thunderstorm":
          weatherImg.src = "./img/weather/night/rain.svg";
          break;
        case "snow":
          weatherImg.src = "./img/weather/night/snow.svg";
          break;
        case "mist":
          weatherImg.src = "./img/weather/mist.svg";
          break;
      }
    }

    locationTitle.textContent = data.name;

    temp.textContent = Math.round(data.main.temp - 273);

    parameterTemplate(
      "./img/parameters/humidity.svg",
      "Влажность",
      data.main.humidity + "%"
    );
    parameterTemplate(
      "./img/parameters/wind.svg",
      "Скорость ветра",
      data.wind.speed + " м/c"
    );

    weatherInner.style.display = "block";
    loader.style.display = "none";
    notFound.style.display = "none";
  } catch (err) {
    locationTitle.textContent = "Город не найден";
    localStorage.removeItem("city");

    weatherContent.style.display = "none";
    notFound.style.display = "flex";
  }

  weatherInner.style.display = "block";
  loader.style.display = "none";
};

getWeatherInfo(JSON.parse(localStorage.getItem("city")) || "Moscow");
