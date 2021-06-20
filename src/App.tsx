import React, { useState, useEffect } from "react";
import { Weather, defaultWeather } from "./common/types";
import Header from "./components/layout/Header";
import Body from "./components/layout/Body";
import { API_KEY } from "./common/secret";
import "./index.scss";

const App = () => {
  const [city, setCity]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");

  const [weather, setWeather]: [
    Weather,
    React.Dispatch<React.SetStateAction<Weather>>
  ] = useState(defaultWeather);

  useEffect(() => {
    const [lat, lon] = [41, -74];

    fetch(
      `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=50&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        const random = Math.ceil(Math.random() * 50);

        setWeather(result.list[random]);
        setCity(weather.name);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (city !== "") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        })
        .catch((error) => console.log(error));
    }
  }, [city]);

  return (
    <div>
      <Header cityUpdater={setCity} />
      <Body weather={weather} />
    </div>
  );
};

export default App;
