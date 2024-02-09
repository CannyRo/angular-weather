import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherToImage',
  standalone: true
})
export class WeatherToImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
