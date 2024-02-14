import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../city';

@Pipe({
  name: 'cityObjectToString',
  standalone: true
})
export class CityObjectToStringPipe implements PipeTransform {

  transform(city: City): string | undefined {
    // if(city.name && city.postcodes && city.admin2 && city.country && city.latitude && city.longitude){
    //   return `${city.name} ${city.postcodes[0]} ${city.admin2} ${city.country} latitude ${city.latitude} longitude ${city.longitude}`;
    // }
    // if(city.name && !city.postcodes && city.admin2 && city.country && city.latitude && city.longitude){
    //   return `${city.name} ${city.admin2} ${city.country} latitude ${city.latitude} longitude ${city.longitude}`;
    // }
    // return `${city.name} ${city.country} latitude ${city.latitude} longitude ${city.longitude}`;
    if(city.name && city.postcodes && city.admin2 && city.country && city.id){
      return `${city.name}, ${city.postcodes[0]}, ${city.admin2}, ${city.country}, [ id : ${city.id} ]`;
    }
    if(city.name && !city.postcodes && city.admin2 && city.country && city.id){
      return `${city.name}, ${city.admin2}, ${city.country}, [ id : ${city.id} ]`;
    }
    return `${city.name}, ${city.country}, [ id : ${city.id} ]`;
  }

}
