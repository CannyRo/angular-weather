import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dailyToDate',
  standalone: true
})
export class DailyToDatePipe implements PipeTransform {

  transform(dateRaw: string): string | undefined  {
    let dateFormated = dateRaw.split('-').slice(1).reverse().join('/');
    return dateFormated;
  }

}
