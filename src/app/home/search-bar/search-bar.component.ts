import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CityObjectToStringPipe } from "../../services/city-object-to-string.pipe";
import { City, Coordinates } from '../../city';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-search-bar',
    standalone: true,
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.css',
    imports: [CommonModule, CityObjectToStringPipe]
})
export class SearchBarComponent implements OnChanges{

  @Input() searchTerm!: string | null;

  @Output() handleTerm = new EventEmitter<string>();

  @Input() cities!: City[] | null;

  @Output() handleCity = new EventEmitter<City>();

  @Output() handleWeather = new EventEmitter<Coordinates>();

  ngOnChanges() {
    console.log("##  ONCHANGE  ##");
    console.log("OnChanges from SearchBarComponent");
    console.log("length", this.cities?.length);
    if(this.cities?.length && this.cities?.length == 1){
      console.log("Check OK");
      this.getOneCity(this.cities);
    }
  }

  handleChange(term:string) {
    this.handleTerm.emit(term);
  }

  getOneCity(cities: City[]){
    this.handleCity.emit(cities[0]);
  }

  getWeather(){
    console.log("GetWeather() from SearchBarComponent");
    if(!this.cities?.length){
      console.log("Type a city name");
    } else if(this.cities?.length && this.cities?.length> 1){
      console.log("Select one city in the list");
    } else {
      console.log(`On cherche ${this.cities[0].name} avec les coordonnées suivantes : LATITUDE = ${this.cities[0].latitude} LONGITUDE = ${this.cities[0].longitude}`);
      let location : Coordinates = {
        latitude : this.cities[0].latitude,
        longitude : this.cities[0].longitude
      }
      this.handleWeather.emit(location);
    }
  }
}
