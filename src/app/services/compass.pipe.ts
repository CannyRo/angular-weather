import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compass',
  standalone: true
})
export class CompassPipe implements PipeTransform {

  transform(angle: number): string {
    let origin : number = 135;
    let intermediate : number = origin + angle;
    let result : number = intermediate > 360 ? intermediate - 360 : intermediate;
    return `rotate(${result})`;
  }

}
