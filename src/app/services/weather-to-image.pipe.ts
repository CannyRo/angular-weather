import { Pipe, PipeTransform } from '@angular/core';
import { Weather } from '../weather';

@Pipe({
  name: 'weatherToImage',
  standalone: true
})
export class WeatherToImagePipe implements PipeTransform {

  transform(weather: Weather): string | undefined {
    console.log("WeatherToImage ON");
    let base: string = "../../../assets/weathercode/";
    let end: string = ".png";
    let dayOrNight: string;
    if(weather.current.is_day == 0){
      dayOrNight = "_night";
    } else {
      dayOrNight = "_day";
    }
    let imgSrc: string = base+weather.current.weathercode+dayOrNight+end;
    console.log(imgSrc);
    return imgSrc;
  }

}
