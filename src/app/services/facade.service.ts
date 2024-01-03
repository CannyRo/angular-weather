import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
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
    console.log("Constructor from FacadeService : ON");
    this.getCityArray();
    // this.searchTerm$.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((term:string)=> this.searchService.getCity(term)),
    // ).subscribe((cities: City[])=> {
    //   this.cities.next(cities);
    // });

  }

  handleSearch(term:string) {
    console.log("handleSearch() from FacadeService");
    this.searchTerm.next(term);
  }

  getCityArray(){
    console.log("getCityArray() from FacadeService");
    this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=> this.searchService.getCity(term)),
    ).subscribe((cities: City[])=> {
      this.cities.next(cities);
    });
  }

  handleCity(cities: City[]){
    console.log("handleCity() from FacadeService");
    this.city.next(cities[0]);
  }

  getWeather(location: Coordinates){
    console.log("getWeather() from FacadeService");
    this.searchService.getWeather(location);
  }
}
