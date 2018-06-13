import axios from 'axios';
import { FETCH_WEATHER } from './types';

const API_KEY = 'f9b3c4e0067e9d150a154256de430243';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// same as ^^^^ const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

//Solitude coordinates
const LAT = 40.619763;
const LON = -111.591896;

export async function fetchWeather() {
  console.log(LAT, LON);
  const url = `${ROOT_URL}&lat=${LAT}&lon=${LON}`;
  const request = await axios.get(url);

  console.log('url', url);
  console.log('Request', request.request._response);

  return {
    type: FETCH_WEATHER,
    // We are returning the promise as the payload
    payload: request
  };
}
