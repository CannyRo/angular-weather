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

  @ViewChild('searchBox') input!: ElementRef<HTMLInputElement>;
  @ViewChild('datalist') datalist!: ElementRef<HTMLInputElement>;

  @Input() searchTerm!: string | null;

  @Output() handleTerm = new EventEmitter<string>();

  @Input() cities!: City[] | null;

  @Output() handleCity = new EventEmitter<City>();

  @Output() handleWeather = new EventEmitter<Coordinates>();

  
  ngOnChanges() {
    // console.log("===> ONCHANGE SearchBar");
    // console.log("onChange Input ",this.input);
    // console.log("onChange Datalist ",this.datalist);
    // if(this.input.nativeElement){}



    if(this.cities?.length && this.cities?.length == 1){
      // console.log("Check OK");
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
    // console.log("GetWeather() from SearchBarComponent");
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
    }
  }

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
    // this.datalist.nativeElement.style.display = 'block';
    // this.input.nativeElement.style
    // this.datalist.nativeElement.childNodes.forEach(

    // )
  }
}
