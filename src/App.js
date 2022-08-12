import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [geoApi, setGeoApi] = useState({ city: "" });
  const [data, setData] = useState({});
  const [err, setErr] = useState("");

  const apiKey = "a8cccd70ee541fc916f05e7ed8c56f46";

  const handleClick = async () => {
    try {
      /* API to search a city name and return city results
	  https://openweathermap.org/api/geocoding-api */
      const geoUrl =
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
        geoApi.city +
        "&limit=1&appid=" +
        apiKey;
      const response = await fetch(geoUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("Geocoding API:", result);

      oneCallApi(result[0].lat, result[0].lon, "imperial");
    } catch (err) {
      setErr(err.message);
    }
  };

  /* API to get weather data based on latitude and longitude 
	https://openweathermap.org/api/one-call-3 */
  function oneCallApi(lat, lon, units) {
    const oneUrl =
      "https://api.openweathermap.org/data/3.0/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey +
      "&units=" +
      units;
    fetch(oneUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("One Call API 3.0:", data);
        setData(data);
      });
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
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </form>

      {err && <p>{err}</p>}

      <div className="card-container">
        <div className="card">
          {data.current && <h2>Current Temperature: {data.current.temp}</h2>}
          {data.current && <h2>Current Humidity: {data.current.humidity}</h2>}
          {data.current && <h2>Current UVI: {data.current.uvi}</h2>}
        </div>
      </div>
    </div>
  );
}
