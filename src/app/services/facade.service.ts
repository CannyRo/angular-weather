import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, finalize, map, switchMap } from 'rxjs';
import { City, Coordinates } from '../city';
import { Weather } from '../weather';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  searchTerm = new Subject<string>();
  cities = new Subject<City[]>();
  city = new Subject<City>();
  location = new Subject<Coordinates>();
  weather = new Subject<Weather>();

  searchTerm$ = this.searchTerm.asObservable();
  cities$ = this.cities.asObservable();
  city$ = this.city.asObservable();
  location$ = this.location.asObservable();
  weather$ = this.weather.asObservable();

  constructor(private searchService: SearchService) {
    // console.log("Constructor from FacadeService : ON");
    this.getCityArray();
    // this.handleLocation();

  }

  handleSearch(term:string) {
    // console.log("handleSearch() from FacadeService");
    this.searchTerm.next(term);
  }

  getCityArray(){
    // console.log("getCityArray() from FacadeService");
    this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=> this.searchService.getCity(term)),
    ).subscribe((cities: City[])=> {
      this.cities.next(cities);
    });
  }

  handleCity(cities: City[]){
    // console.log("handleCity() from FacadeService");
    this.city.next(cities[0]);
  }

  handleLocation() {
    // console.log("handleLocation() from FacadeService");
    this.city$.subscribe((city: City)=>{
      let coordinates : Coordinates = {
        latitude: city.latitude,
        longitude: city.longitude
      }
      this.location.next(coordinates);
    })
  }

  getWeather(location: Coordinates){
    // console.log("getWeather() from FacadeService");
    // let localWeather : Observable<Weather> = this.searchService.getWeather(location)
    this.searchService.getWeather(location).subscribe((weather: Weather) => {
      this.weather.next(weather);
    });
  }

}
