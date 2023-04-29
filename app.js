const parameters = document.querySelector(".parameters");
const temp = document.querySelector("#temp");
const searchForm = document.querySelector("#searchForm");
const searchValue = document.querySelector("#searchValue");
const locationTitle = document.querySelector("#locationTitle");
const weatherInner = document.querySelector(".weather__inner");
const weatherContent = document.querySelector(".weather__content");
const notFound = document.querySelector(".not-found");
const loader = document.querySelector(".loader");

const key = "c4206edf19f35fc184f01a77bb9de40d";

searchForm.onsubmit = (e) => {
  e.preventDefault();

  getWeatherInfo(searchValue.value);
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
    parameters.innerHTML = ``;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );

    const data = await res.json();

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

    weatherContent.style.display = "none";
    notFound.style.display = "flex";
  }
};

getWeatherInfo("Moscow");
