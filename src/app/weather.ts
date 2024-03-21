export interface Weather {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: CurrentUnits;
    current: Current;
    hourly_units: HourlyUnits;
    hourly: Hourly;
    daily_units: DailyUnits;
    daily: Daily;
}

interface CurrentUnits {
    time: string;
    interval: string;
    temperature_2m: string;
    apparent_temperature: string;
    relativehumidity_2m: string;
    is_day: string;
    precipitation: string;
    weathercode: string;
    windspeed_10m: string;
    winddirection_10m: string;
    windgusts_10m: string;
}

interface Current {
    time: string;
    interval: number;
    temperature_2m: number;
    apparent_temperature: number;
    relativehumidity_2m: number;
    is_day: number;
    precipitation: number;
    weathercode: number;
    windspeed_10m: number;
    winddirection_10m: number;
    windgusts_10m: number;
}

export interface HourlyUnits {
    apparent_temperature: string;
    is_day: string;
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    precipitation_probability: string;
    weathercode: string;
    windspeed_10m: string;
    winddirection_10m: string;
    windgusts_10m: string;
}

export interface Hourly {
    apparent_temperature: number[];
    is_day: number[];
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    precipitation_probability: number[];
    weathercode: number[];
    windspeed_10m: number[];
    winddirection_10m: number[];
    windgusts_10m: number[];
}

export interface DailyUnits {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    precipitation_probability_max: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    weather_code: string;
    wind_direction_10m_dominant: string;
    wind_gusts_10m_max: string;
    wind_speed_10m_max: string;
}

export interface Daily {
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    precipitation_probability_max: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weather_code: number[];
    wind_direction_10m_dominant: number[];
    wind_gusts_10m_max: number[];
    wind_speed_10m_max: number[];
}

export interface HourlyFormated {
    apparent_temperature: number;
    is_day: number;
    precipitation_probability: number;
    relativehumidity_2m: number;
    temperature_2m: number;
    time: string;
    weathercode: number;
    winddirection_10m: number;
    windgusts_10m: number;
    windspeed_10m: number;
}

export interface DailyFormated {
    apparent_temperature_max: number;
    apparent_temperature_min: number;
    precipitation_probability_max: number;
    temperature_2m_max: number;
    temperature_2m_min: number;
    time: string;
    weather_code: number;
    wind_direction_10m_dominant: number;
    wind_gusts_10m_max: number;
    wind_speed_10m_max: number;
}