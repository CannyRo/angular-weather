import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
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

  // In process
  @ViewChild('searchBox') input!: ElementRef<HTMLInputElement>;
  @ViewChild('datalist') datalist!: ElementRef<HTMLInputElement>;
  // End of In process

  @Input() searchTerm!: string | null;
  @Input() cities!: City[] | null;
  @Output() handleTerm = new EventEmitter<string>();
  @Output() handleCity = new EventEmitter<City>();
  @Output() handleWeather = new EventEmitter<Coordinates>();
  @Output() removeDetailCity = new EventEmitter()

  
  ngOnChanges() {
    if(this.cities?.length && this.cities?.length == 1){
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
    if(!this.cities?.length){
      console.log(this.cities?.length);
      console.log("Type a city name");
    } else if(this.cities?.length && this.cities?.length> 1){
      console.log(this.cities);
      console.log(this.cities?.length);
      console.log("Select one city in the list");
    } else {
      console.log(`On cherche ${this.cities[0].name} avec les coordonnées suivantes : LATITUDE = ${this.cities[0].latitude} LONGITUDE = ${this.cities[0].longitude}`);
      let location : Coordinates = {
        latitude : this.cities[0].latitude,
        longitude : this.cities[0].longitude
      }
      this.handleWeather.emit(location);
      this.removeDetailCity.emit();
    }
  }

  // In process
  datalistSchemOverwrite(){
    console.log("FOCUS");
    console.log("INPUT",this.input);
    console.log("DATALIST",this.datalist);
    if(this.datalist && this.datalist.nativeElement.childNodes.length > 1){
      console.table(this.datalist.nativeElement.childNodes);
      this.datalist.nativeElement.setAttribute('style', 'display: block');
      let myOptionsArray = Array.from(this.datalist.nativeElement.children);
      myOptionsArray.forEach(element => {
        console.log(myOptionsArray.indexOf(element),element);
        // this.datalist.nativeElement.children
      });
    }
  }
  // End of In process
}
