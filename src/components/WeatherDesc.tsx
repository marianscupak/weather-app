import React from "react";
import { WeatherDesc } from "../common/types";

const WeatherDesc = ({ description }: { description: WeatherDesc }) => {
  return (
    <div className="description">
      <h2>{description.main}</h2>
      <h3>
        {description.description.charAt(0).toUpperCase() +
          description.description.slice(1)}
      </h3>
    </div>
  );
};

export default WeatherDesc;
