const url = "https://api.openweathermap.org/data/2.5/";
const key = "369fd3880f5baf6a198fea13221db94a";

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
  }
};

const getResult = (cityname) => {
  let query = ` ${url}weather?q=${cityname}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};
const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name},${result.sys.country}`;
  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;
  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;
  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°C /
    ${Math.round(result.main.temp_max)}°C`;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);

const express = require("express");
const app = express();

// CORS başlıklarını etkinleştir
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // Diğer gerekli başlıkları eklemek için:
  // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Diğer middleware ve route tanımlamalarınızı ekleyin

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
