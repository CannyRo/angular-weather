import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compassToDirection',
  standalone: true
})
export class CompassToDirectionPipe implements PipeTransform {

  transform(num: number): string {
    // console.log("PIPE is called to have a direction");
    let response : string = '';
    let max!: number;
    let min!: number;
    let closestCardinal!: number;

    function whichCardinaleIsClosest(origin:number, valueMin:number, valueMax:number){
      let difMin = origin - min;
      let difMax = max - origin;
      return Math.min(difMin,difMax) == difMin ? valueMin : valueMax;
    }

    switch(true){
      case num >= 0 && num < 22.5 :
        min = 0;
        max = 22.5;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'North';
        } else {
          response = 'North-NorthEast';
        }
        break;
      case num >= 22.5 && num < 45 :
        min = 22.5;
        max = 45;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'North-NorthEast';
        } else {
          response = 'NorthEast';
        }
        break;
      case num >= 45 && num < 67.5 :
        min = 45;
        max = 67.5;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'NorthEast';
        } else {
          response = 'East-Northeast';
        }
        break;
      case num >= 67.5 && num < 90 :
        min = 67.5;
        max = 90;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'East-Northeast';
        } else {
          response = 'East';
        }
        break;
      case num >= 90 && num < 112.5 :
        min = 90;
        max = 112.5;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'East';
        } else {
          response = 'East-SouthEast';
        }
        break;
      case num >= 112.5 && num < 135 :
        min = 112.5;
        max = 135;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'East-SouthEast';
        } else {
          response = 'SouthEast';
        }
        break;
      case num >= 135 && num < 157.5 :
        min = 135;
        max = 157.5;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'SouthEast';
        } else {
          response = 'South-SouthEast';
        }
        break;
      case num >= 157.5 && num < 180 :
        min = 157.5;
        max = 180;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'South-SouthEast';
        } else {
          response = 'South';
        }
        break;
      case num >= 180 && num < 202.5 :
        min = 180;
        max = 202.5;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'South';
        } else {
          response = 'South-SouthWest';
        }
        break;
      case num >= 202.5 && num < 225 :
        min = 202.5;
        max = 225;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'South-SouthWest';
        } else {
          response = 'SouthWest';
        }
        break;
      case num >= 225 && num < 247.5 :
        min = 225;
        max = 247.5;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'SouthWest';
        } else {
          response = 'West-SouthWest';
        }
        break;
      case num >= 247.5 && num < 270 :
        min = 247.5;
        max = 270;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'West-SouthWest';
        } else {
          response = 'West';
        }
        break;
      case num >= 270 && num < 292.5 :
        min = 270;
        max = 292.5;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'West';
        } else {
          response = 'West-NorthWest';
        }
        break;
      case num >= 292.5 && num < 315 :
        min = 292.5;
        max = 315;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'West-NorthWest';
        } else {
          response = 'NorthWest';
        }
        break;
      case num >= 315 && num < 337.5 :
        min = 315;
        max = 337.5;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'NorthWest';
        } else {
          response = 'North-NorthWest';
        }
        break;
      case num >= 337.5 && num < 360 :
        min = 337.5;
        max = 360;
        closestCardinal = whichCardinaleIsClosest(num, min, max);
        if(closestCardinal == min){
          response = 'North-NorthWest';
        } else {
          response = 'North';
        }
        break;
      default:
        console.log("SWITCH");
        response = "North";
    }

    

    // let compassValues = [0, 22.5, 45]
    // let degreeMin: number = 0;
    // let degreeMax: number = 22.5;
    // for( let i=0; i<360; i+22.5){
    //   const min = degreeMin;
    //   const max = degreeMax;
    //   if(num >= min || num < max){
    //     whichCardinaleIsClosest(num, min, max);
    //   }
    // }
    return response;
  }

}
