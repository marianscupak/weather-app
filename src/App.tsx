import React, { useState, useEffect, useRef } from "react";
import {
  Weather,
  defaultWeather,
  CityData,
  defaultCityState,
} from "./common/types";
import Header from "./components/layout/Header";
import Body from "./components/layout/Body";
import { API_KEY } from "./common/secret";
import { mapTempToColor, getRandomWeather } from "./common/utils";
import "./index.scss";

const App = () => {
  const [data, setCity]: [
    CityData,
    React.Dispatch<React.SetStateAction<CityData>>
  ] = useState(defaultCityState);

  const [weather, setWeather]: [
    Weather,
    React.Dispatch<React.SetStateAction<Weather>>
  ] = useState(defaultWeather);

  const [color, setColor] = useState({ r: 0, g: 0, b: 255 });

  const interval: any = useRef(null);

  function setupWeather() {
    getRandomWeather().then((res) => {
      setWeather(res);
      setColor(mapTempToColor(res.main.temp));
      setCity({
        city: res.name,
        shouldUpdate: false,
      });
    });
  }

  useEffect(() => {
    setupWeather();

    interval.current = setInterval(setupWeather, 5000);
  }, []);

  useEffect(() => {
    if (data.shouldUpdate) {
      clearInterval(interval.current);
      if (data.city) {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeather(result);
            setColor(mapTempToColor(result.main.temp));
          })
          .catch((error) => console.log(error));
      }
    }
  }, [data]);

  const backgroundColor = {
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
  };

  return (
    <div style={backgroundColor} className="main-container">
      <Header cityUpdater={setCity} />
      <Body weather={weather} />
    </div>
  );
};

export default App;
