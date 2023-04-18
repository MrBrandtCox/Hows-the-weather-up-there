let searchForm = document.getElementById("searchForm");
let searchInput = document.getElementById("searchInput");
let current = document.getElementById("current");
let forecast = document.getElementById("forecast");
let searchHistory = document.getElementById("searchHistory");
let APIKey = "341aaf80a11931f9bf2fb6f0aac538b4"; // my api key

//create input to search city

// test api endpoints
//let cityName = "Salt Lake City";
//let cityQuery = 
    //"https://api.openweathermap.org/data/2.5/weather?q=" +
    //cityName + 
    //"&appid=" +
    //APIKey;


    //let forecastQuery = 
    //"https://api.openweathermap.org/data/2.5/forecast?q=" +
    //cityName +
    //"&appid=" +
    //APIKey;

//fetch(forecastQuery)
    //.then(function (res) {
        //return res.json();
    //})
    //.then(function (data) {
        //console.log(data);
    //});

// current conditions
// show city name, date, icon, temp, humidity, wind speed
function renderCurrentWeather (data) {
    let name = document.createElement("div");
    name.textContent = data.name;
    current.append(name);

    let date = document.createElement("div");
    date.textContent = data.dt;
    current.append(date);

    let temp = document.createElement("div");
    temp.textContent = data.main.temp;
    current.append(temp);

    let humidity = document.createElement("div");
    humidity.textContent = data.main.humidity;
    current.append(humidity);

    let windSpeed = document.createElement("div");
    windSpeed.textContent = data.wind.speed;
    current.append(windSpeed);

    let icon = document.createElement("div");
    icon.textContent = data.icon;
    current.append(icon);
}


function displayCurrent(name) {
    let cityName = name;
    let cityQuery = 
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName + 
    "&units=imperial" +
    "&appid=" +
    APIKey;

    fetch(cityQuery)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data); //Do I need this console.log?
            renderCurrentWeather(data);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function searchCity (e) {
    e.preventDefault();
    displayCurrent(searchInput.value);
}

searchForm.addEventListener("submit", searchCity);

// future conditions


// save the city in local storage and append to page

// clicking on city displays the forecast again