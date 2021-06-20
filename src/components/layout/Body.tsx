import React from "react";
import { Weather } from "../../common/types";
import WeatherDesc from "../WeatherDesc";
import WindVisual from "../WindVisual";

const Body = ({ weather }: { weather: Weather }) => {
  return weather && weather.name ? (
    <div className="main">
      <div>
        <h1>{weather.name}</h1>
        {weather.weather.map((value) => {
          return <WeatherDesc key={value.id} description={value} />; // Add icon to the desc component
        })}
        <h2>
          Temperature: {Math.round((weather.main.temp - 273.15) * 100) / 100} °C
        </h2>
        <h2>Humidity: {weather.main.humidity}%</h2>
      </div>
      <div className="divider"></div>
      <WindVisual wind={weather.wind} />
    </div>
  ) : (
    <div className="main">
      <h1>City not found.</h1>
    </div>
  );
};

export default Body;
