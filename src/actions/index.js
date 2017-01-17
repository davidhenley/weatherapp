import axios from 'axios';

const API_KEY = 'a65e4cf01f6cb7d10cc43e1ef43b7354';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  console.log("Fetching Weather for", city);
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
