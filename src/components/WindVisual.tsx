import React from "react";
import { Wind } from "../common/types";
import arrow from "../../public/arrow.svg";
import { scale } from "../common/utils";

const WindVisual = ({ wind }: { wind: Wind }) => {
  const arrowStyle = {
    transform: `scale(${scale(wind.speed, 0, 56, 0.4, 1)}) rotateZ(${
      wind.deg
    }deg)`,
  };

  return (
    <div className="wind-visual">
      <h2>Wind Speed: {wind.speed} m/s</h2>
      <img src={arrow} alt="arrow" className="arrow" style={arrowStyle} />
    </div>
  );
};

export default WindVisual;
