export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Alerts = {
  __typename?: 'Alerts';
  sender_name?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Current = {
  __typename?: 'Current';
  dt?: Maybe<Scalars['Int']>;
  sunrise?: Maybe<Scalars['Int']>;
  sunset?: Maybe<Scalars['Int']>;
  temp?: Maybe<Scalars['Float']>;
  feels_like?: Maybe<Scalars['Float']>;
  pressure?: Maybe<Scalars['Int']>;
  humidity?: Maybe<Scalars['Int']>;
  dew_point?: Maybe<Scalars['Float']>;
  uvi?: Maybe<Scalars['Int']>;
  clouds?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
  wind_speed?: Maybe<Scalars['Float']>;
  wind_deg?: Maybe<Scalars['Int']>;
  wind_gust?: Maybe<Scalars['Float']>;
  weather?: Maybe<Array<Maybe<Weather>>>;
};

export type Daily = {
  __typename?: 'Daily';
  dt?: Maybe<Scalars['Int']>;
  sunrise?: Maybe<Scalars['Int']>;
  sunset?: Maybe<Scalars['Int']>;
  temp?: Maybe<DailyTemp>;
  feels_like?: Maybe<DailyFeelsLike>;
  pressure?: Maybe<Scalars['Int']>;
  humidity?: Maybe<Scalars['Int']>;
  dew_point?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
  wind_deg?: Maybe<Scalars['Int']>;
  wind_gust?: Maybe<Scalars['Float']>;
  weather?: Maybe<Array<Maybe<Weather>>>;
  clouds?: Maybe<Scalars['Int']>;
  pop?: Maybe<Scalars['Float']>;
  uvi?: Maybe<Scalars['Float']>;
};

export type DailyFeelsLike = {
  __typename?: 'DailyFeelsLike';
  day?: Maybe<Scalars['Float']>;
  night?: Maybe<Scalars['Float']>;
  eve?: Maybe<Scalars['Float']>;
  morn?: Maybe<Scalars['Float']>;
};

export type DailyTemp = {
  __typename?: 'DailyTemp';
  day?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  night?: Maybe<Scalars['Float']>;
  eve?: Maybe<Scalars['Float']>;
  morn?: Maybe<Scalars['Float']>;
};

export type Error = {
  __typename?: 'Error';
  state: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type Hourly = {
  __typename?: 'Hourly';
  dt?: Maybe<Scalars['Int']>;
  temp?: Maybe<Scalars['Float']>;
  feels_like?: Maybe<Scalars['Float']>;
  pressure?: Maybe<Scalars['Int']>;
  humidity?: Maybe<Scalars['Int']>;
  dew_point?: Maybe<Scalars['Float']>;
  uvi?: Maybe<Scalars['Float']>;
  clouds?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
  wind_speed?: Maybe<Scalars['Float']>;
  wind_deg?: Maybe<Scalars['Int']>;
  wind_gust?: Maybe<Scalars['Float']>;
  weather?: Maybe<Array<Maybe<Weather>>>;
  pop?: Maybe<Scalars['Float']>;
};

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
};

export type Minutely = {
  __typename?: 'Minutely';
  dt?: Maybe<Scalars['Int']>;
  precipitation?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getWeather?: Maybe<WeatherResponse>;
};


export type QueryGetWeatherArgs = {
  city?: Maybe<Scalars['String']>;
};


export type Weather = {
  __typename?: 'Weather';
  id?: Maybe<Scalars['ID']>;
  main?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type WeatherResponse = {
  __typename?: 'WeatherResponse';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  timezone?: Maybe<Scalars['String']>;
  timezone_offset?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  current?: Maybe<Current>;
  minutely?: Maybe<Array<Maybe<Minutely>>>;
  hourly?: Maybe<Array<Maybe<Hourly>>>;
  daily?: Maybe<Array<Maybe<Daily>>>;
  alerts?: Maybe<Array<Maybe<Alerts>>>;
  error: Error;
};
