import { Component, OnDestroy, OnInit } from '@angular/core';
import { FacadeService } from '../services/facade.service';
import { City, Coordinates } from '../city';
import { Weather } from '../weather';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BackgroundIsDayOrNightDirective } from '../services/background-is-day-or-night.directive';
import { WeatherToImagePipe } from '../services/weather-to-image.pipe';
import { WeatherToTextPipe } from '../services/weather-to-text.pipe';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, BackgroundIsDayOrNightDirective, WeatherToImagePipe, WeatherToTextPipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit, OnDestroy{

  city!: City | null;
  weather!: Weather | null;

  detailCityAsString!: string | null;

  backgroundColor: string | undefined;
  textColor: string | undefined;
  hrColor: string | undefined;

  constructor(
    private facade: FacadeService,
    private router: Router
    ){}

  ngOnInit(): void {
    console.log("Detail onInit");
    this.city = this.facade.getDetailCity();
    console.log(this.city);
    if(this.city == undefined || this.city == null){
      this.router.navigate(['/home']);
    }
    let location : Coordinates = {
      latitude : this.city.latitude,
      longitude : this.city.longitude
    }
    this.facade.getWeather(location);
    this.facade.weather$.subscribe(weather => {
      console.log("IN Detail after Subscribe => ");
      console.log(weather);
      this.weather = weather;
      this.backgroundColor = weather.current.is_day == 0 ? 'bg_night' : 'bg_day';
      this.textColor = weather.current.is_day == 0 ? 'color_night' : 'color_day';
      this.hrColor = weather.current.is_day == 0 ? 'hr_night' : 'hr_day';
    });
    console.log(this.weather);
    if(this.weather && this.city){
      
    }
  }

  ngOnDestroy(): void {
    console.log("Destroy");
    this.facade.removeDetailCity();
  }

  backHome(): void {
    this.facade.removeDetailCity();
    this.router.navigate(['/home']);
  }
}
