import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourlyToHour',
  standalone: true
})
export class HourlyToHourPipe implements PipeTransform {

  transform(hourRaw: string): string | undefined  {
    let index = hourRaw.indexOf('T');
    let hourFormated = hourRaw.substring(index+1);
    return hourFormated;
  }

}
