import { gql } from 'apollo-server';

export const typeDefs = gql`
  type WeatherResponse {
    location: Location
    lat: Float
    lon: Float
    timezone: String
    timezone_offset: Int
    current: Current
    minutely: [Minutely]
    hourly: [Hourly]
    daily: [Daily]
    alerts: [Alerts]
    error: Error!
  }

  type Location {
    city : String
    state : String
    country : String
    place : String
  }

  type Weather {
    id: ID
    main: String
    description: String
    icon: String
  }

  type Minutely {
    dt: Int
    precipitation: Int
  }

  type Current {
    dt: Int
    sunrise: Int
    sunset: Int
    temp: Float
    feels_like: Float
    pressure: Int
    humidity: Int
    dew_point: Float
    uvi: Int
    clouds: Int
    visibility: Int
    wind_speed: Float
    wind_deg: Int
    wind_gust: Int
    rain: Int
    snow: Int
    weather: [Weather]
  }

  type Hourly {
    dt: Int
    temp: Float
    feels_like: Float
    pressure: Int
    humidity: Int
    dew_point: Float
    uvi: Float
    clouds: Int
    visibility: Int
    wind_speed: Float
    wind_deg: Int
    wind_gust: Int
    rain: Int
    snow: Int
    weather: [Weather]
    pop: Float
  }

  type Daily {
    dt: Int
    sunrise: Int
    sunset: Int
    temp: DailyTemp
    feels_like: DailyFeelsLike
    pressure: Int
    humidity: Int
    dew_point: Float
    wind_speed: Float
    wind_deg: Int
    wind_gust: Int
    rain: Int
    snow: Int
    weather: [Weather]
    clouds: Int
    pop: Float
    uvi: Float
  }

  type DailyTemp {
    day: Float
    min: Float
    max: Float
    night: Float
    eve: Float
    morn: Float
  }

  type DailyFeelsLike {
    day: Float
    night: Float
    eve: Float
    morn: Float
  }

  type Alerts {
    sender_name: String
    event: String
    start: Int
    end: Int
    description: String
  }

  type Error {
    state: Boolean!
    message: String
  }

  type Query {
    getWeather(city: String): WeatherResponse
  }
`