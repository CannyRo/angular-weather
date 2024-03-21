import { Pipe, PipeTransform } from '@angular/core';
import { DailyFormated } from '../weather';

@Pipe({
  name: 'dailyToImage',
  standalone: true
})
export class DailyToImagePipe implements PipeTransform {

  transform(dailyData: DailyFormated): string | undefined {
    let base: string = "../../../assets/weathercode/";
    let end: string = ".png";
    let dayOrNight: string = "_day";
    let imgSrc: string = base+dailyData.weather_code+dayOrNight+end;
    return imgSrc;
  }
}
