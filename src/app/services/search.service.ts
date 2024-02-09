import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { City, Coordinates } from '../city';
import { Weather } from '../weather';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getCity(term: string): Observable<City[]>{
    console.log("getCity() from SearchService");
    // console.log("term read by SearchService", term);
    if(!term.trim()){
      console.log("No term to search");
      return of([]);
    }
    let termToArray : string[] = term.split(",");
    // console.log("termToArray : ",termToArray);
    let termToArrayFromSpace : string[] = term.split(" ");
    // console.log("termToArrayFromSpace : ",termToArrayFromSpace);
    let formatedTerm : string | undefined = termToArray.at(0);
    // console.log("formatedTerm : ",formatedTerm);
    if(termToArray.length >= 3 && termToArrayFromSpace[termToArrayFromSpace.length-4] == "id"){
      console.log("CHECK is OK")
      // console.log(termToArrayFromSpace[termToArrayFromSpace.length-2]);
      // console.log(Number(termToArrayFromSpace[termToArrayFromSpace.length-2]));
      return this.http.get<any>(`https://geocoding-api.open-meteo.com/v1/search?name=${formatedTerm}&count=12&language=en&format=json`).pipe(
        tap(response => {
          console.log(response.results);
          console.log(typeof(response));
        }),
        map(response => response.results),
        map(response => response.filter((res: City) => res.id == Number(termToArrayFromSpace[termToArrayFromSpace.length-2]))),
        tap(response => {
          console.log("===ICI===");
          console.log(response);
        }),
        catchError(this.handleError<any>('getCityData error'))
      );
    }
    return this.http.get<any>(`https://geocoding-api.open-meteo.com/v1/search?name=${formatedTerm}&count=12&language=en&format=json`).pipe(
        tap(response => {
          console.log(response.results);
          console.log(typeof(response));
        }),
        map(response => response.results),
        tap(response => {
          console.log("===ICI===");
          console.log(response);
        }),
        catchError(this.handleError<any>('getCity error'))
      );
  }

  getWeather(location: Coordinates): Observable<Weather> {
    console.log("getWeather() from SearchService");
    return this.http.get<any>(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=apparent_temperature,temperature_2m,relativehumidity_2m,is_day,precipitation,weathercode,windspeed_10m,winddirection_10m,windgusts_10m&hourly=apparent_temperature,temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,windspeed_10m,winddirection_10m,windgusts_10m&daily=weathercode,sunrise,sunset,uv_index_max&timezone=auto`).pipe(
      tap(response => console.log(response)),
      catchError(this.handleError<any>('getWeather error'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

