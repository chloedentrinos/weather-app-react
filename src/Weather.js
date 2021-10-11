import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState({ ready: false });
  const [weatherData, setWeatherData] = useState();

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Friday",
      time: "14:00",
      description: response.data.weather[0].description,
      showers: 94,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      maximumTemperature: 16,
      minimumTemperature: 14,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      uvIndex: "low",
      forecastDay: "Saturday",
      forecastMaximumTemperature: 12,
      forecastMinimumTemperature: 9,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="row g-3 row">
          <div className="col-7">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city..."
              autoFocus="on"
            />
          </div>
          <div className="col-auto">
            <input
              type="submit"
              className="btn btn-primary mb-3"
              value="Search"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="btn btn-success mb-3"
              value="Current"
            />
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <h4>
          {weatherData.date}, {weatherData.time}
        </h4>
        <br />
        <div className="row g-3">
          <div className="col-3">
            <h3>{weatherData.description}</h3>
            <div className="showers">
              Chance of showers: {weatherData.showers}%
            </div>
          </div>
          <div className="col-3 iconCurrent">
            <i className="fas fa-cloud-rain cloud-rain"></i>
          </div>
          <div className="col-4 currentTemperatureAll">
            <h2>{weatherData.temperature}</h2>
            <stan>
              <a href="/" className="currentTemperatureUnit">
                <strong> °C</strong>
              </a>
              <stan className="currentTemperatureUnitSeparator"> | </stan>
              <a href="/" className="currentTemperatureUnit">
                °F
              </a>
            </stan>
            <div className="temperature">
              {weatherData.maximumTemperature}°C /{" "}
              {weatherData.minimumTemperature}°C
            </div>
          </div>
          <div className="col-2 currentWeatherExtras">
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Wind: {weatherData.wind} km/h</p>
            <p>UV index: {weatherData.uvIndex}</p>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-auto">
            <div className="day">{weatherData.forecastDay}</div>
            <i className="fas fa-cloud-rain cloud-rain iconFuture"></i>
            <div className="temperature">
              {weatherData.forecastMaximumTemperature}°C /{" "}
              {weatherData.forecastMinimumTemperature}°C
            </div>
          </div>
          <div className="col-auto">
            <div className="day">{weatherData.forecastDay}</div>
            <i className="fas fa-cloud-rain cloud-rain iconFuture"></i>
            <div className="temperature">
              {weatherData.forecastMaximumTemperature}°C /{" "}
              {weatherData.forecastMinimumTemperature}°C
            </div>
          </div>
          <div className="col-auto">
            <div className="day">{weatherData.forecastDay}</div>
            <i className="fas fa-cloud-sun cloud-sun iconFuture"></i>
            <div className="temperature">
              {weatherData.forecastMaximumTemperature}°C /{" "}
              {weatherData.forecastMinimumTemperature}°C
            </div>
          </div>
          <div className="col-auto">
            <div className="day">{weatherData.forecastDay}</div>
            <i className="fas fa-cloud-sun cloud-sun iconFuture"></i>
            <div className="temperature">
              {weatherData.forecastMaximumTemperature}°C /{" "}
              {weatherData.forecastMinimumTemperature}°C
            </div>
          </div>
          <div className="col-auto">
            <div className="day">{weatherData.forecastDay}</div>
            <i className="fas fa-cloud-sun cloud-sun iconFuture"></i>
            <div className="temperature">
              {weatherData.forecastMaximumTemperature}°C /{" "}
              {weatherData.forecastMinimumTemperature}°C
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "acd17a551bf3501fded89c5b043d5045";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
