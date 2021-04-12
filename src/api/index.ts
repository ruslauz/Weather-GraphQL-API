import fetch from 'node-fetch';

import { API_KEY, ERROR_MESSAGE } from '../constants';

/* Weather API */
export const getWeather = async ({ lon, lat }) => {
  const BASE_URL = new URL('https://api.openweathermap.org/data/2.5/onecall');
  BASE_URL.searchParams.append('lat', lat);
  BASE_URL.searchParams.append('lon', lon);
  BASE_URL.searchParams.append('appid', API_KEY);
  BASE_URL.searchParams.append('units', 'metric');
  BASE_URL.searchParams.append('lang', 'ru');
  BASE_URL.searchParams.append('exclude', 'minutely');
  const response = await fetch(BASE_URL);
  if (!response.ok) throw Error(response.status.toString());
  const data = await response.json();
  return data;
};

/* Location Api */
type GetCoords = Promise<{
    lon: number;
    lat: number;
    city?: string;
    state?: string;
    country?: string;
    place?: string;
}>;

export const getCoordinates = async (city = 'Moscow'): GetCoords  => {
  const BASE_URL = new URL('https://nominatim.openstreetmap.org/search.php');
  BASE_URL.searchParams.append('q', city);
  BASE_URL.searchParams.append('format', 'json');
  BASE_URL.searchParams.append('addressdetails', '1');
  BASE_URL.searchParams.append('limit', '1');
  BASE_URL.searchParams.append('accept-language', 'ru');
  const response = await fetch(BASE_URL);
  if (!response.ok) throw Error(response.status.toString());
  const data = await response.json();
  if (data.length) {
    const [{ lon, lat, address: { city, state, country, place } }] = data;
    return { lon, lat, city, state, country, place };
  } else {
    throw Error(ERROR_MESSAGE);
  }
};


