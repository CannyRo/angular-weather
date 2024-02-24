import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, finalize, map, switchMap } from 'rxjs';
import { City, Coordinates } from '../city';
import { Weather } from '../weather';
import { coupleDataCityWeather } from '../duo';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class FacadeService {

  searchTerm = new Subject<string>();
  cities = new Subject<City[]>();
  city = new Subject<City>();
  weather = new Subject<Weather>();

  searchTerm$ = this.searchTerm.asObservable();
  cities$ = this.cities.asObservable();
  city$ = this.city.asObservable();
  weather$ = this.weather.asObservable();

  lastCity!: City | null;
  lastWeather!: Weather | null;

  key : string = "detail";
  detailCityAsString!: string | null;
  detailCity!: City;

  constructor(
    private searchService: SearchService,
    private localStorage: LocalStorageService
    ) {
    this.getCityArray();
  }

  handleSearch(term:string) {
    // console.log("handleSearch() from FacadeService");
    this.searchTerm.next(term);
  }

  getCityArray(){
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

  getWeather(location: Coordinates){
    // console.log("getWeather() from FacadeService");
    // let localWeather : Observable<Weather> = this.searchService.getWeather(location)
    this.searchService.getWeather(location).subscribe((weather: Weather) => {
      this.weather.next(weather);
    });
  }

  handleLastValues(duoDatas: coupleDataCityWeather){
    console.log("handleLastValues in FACADE");
    console.log(duoDatas);
    this.lastCity = duoDatas.city;
    this.lastWeather = duoDatas.weather;
    console.log("lastCity & lastWeather");
    console.log(this.lastCity);
    console.log(this.lastWeather);
  }

  setDetailCity(city:City){
    console.log("Set this city in localStorage =>",city);
    let value : string = JSON.stringify(city);
    this.localStorage.setItem(this.key, value);
  }

  getDetailCity():City{
    console.log("Get this key from localStorage =>",this.key);
    this.detailCityAsString = this.localStorage.getItem(this.key);
    if(this.detailCityAsString !== null){
      this.detailCity = JSON.parse(this.detailCityAsString);
    }
    return this.detailCity
  }

  removeDetailCity(){
    this.localStorage.removeItem(this.key)
  }

}
