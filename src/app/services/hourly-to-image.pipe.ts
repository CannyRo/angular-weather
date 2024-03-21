import { Pipe, PipeTransform } from '@angular/core';
import { HourlyFormated } from '../weather';

@Pipe({
  name: 'hourlyToImage',
  standalone: true
})
export class HourlyToImagePipe implements PipeTransform {

  transform(hourlyData: HourlyFormated): string | undefined {
    let base: string = "../../../assets/weathercode/";
    let end: string = ".png";
    let dayOrNight: string;
    if(hourlyData.is_day == 0){
      dayOrNight = "_night";
    } else {
      dayOrNight = "_day";
    }
    let imgSrc: string = base+hourlyData.weathercode+dayOrNight+end;
    return imgSrc;
  }

}
