import { Component, OnDestroy, OnInit } from '@angular/core';
import { FacadeService } from '../services/facade.service';
import { City, Coordinates } from '../city';
import { Weather } from '../weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit, OnDestroy{

  city!: City | null;
  weather!: Weather | null;

  detailCityAsString!: string | null;

  constructor(private facade: FacadeService){}

  ngOnInit(): void {
    console.log("Detail onInit");
    this.city = this.facade.getDetailCity();
    console.log(this.city);
    let location : Coordinates = {
      latitude : this.city.latitude,
      longitude : this.city.longitude
    }
    this.facade.getWeather(location);
    this.facade.weather$.subscribe(weather => {
      console.log("IN Detail after Subscribe => ");
      console.log(weather);
      this.weather = weather;
    });
    console.log(this.weather);
  }

  ngOnDestroy(): void {
    console.log("Destroy");
    this.facade.removeDetailCity();
  }
}
