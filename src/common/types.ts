declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

export interface Weather {
  id: number
  name: string
  coord: Coord
  main: Temps
  dt: number
  wind: Wind
  sys: Sys
  rain: any
  snow: any
  clouds: Clouds
  weather: WeatherDesc[]
}

export interface Coord {
  lat: number
  lon: number
}

export interface Temps {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Sys {
  country: string
}

export interface Clouds {
  all: number
}

export interface WeatherDesc {
  id: number
  main: string
  description: string
  icon: string
}

export interface Color {
  r: number
  g: number
  b: number
}

export interface CityData {
  city: string
  shouldUpdate: boolean
};

export const defaultCityState = {
  city: "",
  shouldUpdate: false
}

export const defaultWeather: Weather = {
  id: 0,
  name: "",
  coord: {
    lat: 0,
    lon: 0
  },
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0
  },
  dt: 0,
  wind: {
    speed: 0,
    deg: 0
  },
  sys: {
    country: ""
  },
  rain: null,
  snow: null,
  clouds: {
    all: 0
  },
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: ""
    }
  ]
}