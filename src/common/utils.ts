import { Color } from "./types";
import { API_KEY } from "../common/secret";

export function scale(
  number: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function mapTempToColor(temp: number): Color {
  const ratio = scale(temp - 273.15, -15, 45, 0.3, 1);

  return {r: 255 * ratio, g: 0, b: 255 * (1 -  ratio)};
}

export async function getRandomWeather() {
  const [lat, lon] = [41, -74];
  try {
    const fetchResult = await fetch(
      `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=50&appid=${API_KEY}`
    );
    const json = await fetchResult.json();

    const random = Math.ceil(Math.random() * 50);

    return json.list[random];
  }
  catch (e) {
    console.error(e);
    return null;
  }
}