import { getCoordinates, getWeather as getWeatherFromApi } from '../api';
import { ERROR_MESSAGE } from '../constants';
import { WeatherResponse } from '../generated/graphql';

const getWeather = async (_, { city }): Promise<WeatherResponse> => {
  try {
    const { lat, lon, ...location } = await getCoordinates(city);
    const weather = await getWeatherFromApi({ lat, lon });
    return {
      ...weather,
      location,
      error: { state: false },
    };
  } catch (error) {
    return {
      error: {
        state: true,
        message: ERROR_MESSAGE,
      }
    }
  }
}

export const resolvers = {
  Query: {
    getWeather
  }
};
