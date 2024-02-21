import { Pipe, PipeTransform } from '@angular/core';
import { Weather } from '../weather';

@Pipe({
  name: 'weatherToText',
  standalone: true
})
export class WeatherToTextPipe implements PipeTransform {

  transform(weather: Weather): string | undefined {
    let response!: string;
    switch(weather.current.weathercode){
      case 0:
        response = "Clear sky";
        break;
      case 1:
        response = "Mainly clear";
        break;
      case 2:
        response = "Partly cloudy";
        break;
      case 3:
        response = "Overcast";
        break;
      case 45:
        response = "Fog";
        break;
      case 48:
        response = "Depositing rime fog";
        break;
      case 51:
        response = "Light drizzle";
        break;
      case 53:
        response = "Moderate drizzle";
        break;
      case 55:
        response = "Dense drizzle";
        break;
      case 56:
        response = "Light freezing drizzle";
        break;
      case 57:
        response = "Light freezing drizzle";
        break;
      case 61:
        response = "Slight rain";
        break;
      case 63:
        response = "Moderate rain";
        break;
      case 65:
        response = "Heavy rain";
        break;
      case 66:
        response = "Slight freezing rain";
        break;
      case 67:
        response = "Heavy freezing rain";
        break;
      case 71:
        response = "Slight snow fall";
        break;
      case 73:
        response = "Moderate snow fall";
        break;
      case 75:
        response = "Heavy snow fall";
        break;
      case 77:
        response = "Snow grains";
        break;
      case 80:
        response = "Slight rain showers";
        break;
      case 81:
        response = "Moderate rain showers";
        break;
      case 82:
        response = "Violent rain showers";
        break;
      case 85:
        response = "Slight snow showers";
        break;
      case 86:
        response = "Heavy snow showers";
        break;
      case 95:
        response = "Thunderstorm";
        break;
      case 96:
        response = "Thunderstorm with slight hail";
        break;
      case 99:
        response = "Thunderstorm with heavy hail";
        break;
      default:
        response = "No information";
    }
    return response;
  }

}
