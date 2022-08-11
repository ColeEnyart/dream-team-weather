import React from 'react';
import './App.css';

export default function App() {

  let cityName = "London";
  const limit = "5";
  let exclude = "";
  const apiKey = "a8cccd70ee541fc916f05e7ed8c56f46";
  let units = "imperial";

  // API to search a city name and return city results  https://openweathermap.org/api/geocoding-api
  function geocodingApi() {
    const geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=" + limit + "&appid=" + apiKey;
    console.log(geoUrl);
  }

  // API to get weather data based on latitude and longitude  https://openweathermap.org/api/one-call-3
  function oneCallApi(lat, lon) {
    const oneUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&exclude=" + exclude + "&appid="+ apiKey + "&units=" + units;
    console.log(oneUrl);
  }

  geocodingApi();

  return (
    <div className="app">
      <h1>Dream Team Weather</h1>
    </div>
  );
}
