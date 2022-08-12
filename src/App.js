import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [geoApi, setGeoApi] = useState({
    city: "",
    limit: "1",
  });

  const [oneApi, setOneApi] = useState({
    lat: "",
    lon: "",
    exclude: "",
    units: "imperial",
  });

  const apiKey = "a8cccd70ee541fc916f05e7ed8c56f46";

  /* API to search a city name and return city results
  https://openweathermap.org/api/geocoding-api */
  function geocodingApi() {
    const geoUrl =
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
      geoApi.city +
      "&limit=" +
      geoApi.limit +
      "&appid=" +
      apiKey;
    fetch(geoUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  /* API to get weather data based on latitude and longitude 
  https://openweathermap.org/api/one-call-3 */
  function oneCallApi() {
    const oneUrl =
      "https://api.openweathermap.org/data/3.0/onecall?lat=" +
      oneApi.lat +
      "&lon=" +
      oneApi.lon +
      "&exclude=" +
      oneApi.exclude +
      "&appid=" +
      apiKey +
      "&units=" +
      oneApi.units;
    fetch(oneUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function handleChange(event) {
    setGeoApi((prevGeoApi) => {
      return {
        ...prevGeoApi,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="app">
      <h1>Dream Team Weather</h1>
      <form>
        <label htmlFor="city">Search for a city:</label>
        <input
          type="text"
          placeholder="New York"
          onChange={handleChange}
          name="city"
          value={geoApi.city}
        />
        <button type="button" onClick={geocodingApi}>
          Search
        </button>
      </form>
    </div>
  );
}
