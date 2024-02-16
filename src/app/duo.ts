import { City } from "./city";
import { Weather } from "./weather";

export interface coupleDataCityWeather {
    city: City | null;
    weather: Weather | null;
}