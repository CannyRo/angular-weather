import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Daily, DailyFormated, DailyUnits, Hourly, HourlyFormated, HourlyUnits, Weather } from '../../weather';
import { CommonModule } from '@angular/common';
import { HourlyToImagePipe } from '../../services/hourly-to-image.pipe';
import { HourlyToHourPipe } from '../../services/hourly-to-hour.pipe';
import { CompassPipe } from "../../services/compass.pipe";
import { DailyToDatePipe } from '../../services/daily-to-date.pipe';
import { DailyToImagePipe } from '../../services/daily-to-image.pipe';

@Component({
    selector: 'app-carousel',
    standalone: true,
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css',
    imports: [CommonModule, HourlyToImagePipe, HourlyToHourPipe, DailyToImagePipe, DailyToDatePipe, CompassPipe]
})
export class CarouselComponent implements OnInit, OnChanges{
  @Input() weather!: Weather | undefined;
  @Input() carouselType!: string | undefined;
  @Input() carouselData!: any | undefined;
  @Input() carouselDataUnit!: any | undefined;
  @Input() background!: string | undefined;
  @Input() text!: string | undefined;
  
// supprimer Weather une fois le nécessaire fait
  hourlyData: HourlyFormated[] = []; 

  dailyData: DailyFormated[] = [];

  // containerWidth: number = 0;
  sliderWidth: number = 96;
  styleInline: string = '';

  constructor(private elementRef: ElementRef){
    
  }
  ngOnInit(): void {
    if(this.carouselType == 'hourly'){
      console.log('Hourly Carousel On')
      // get the hour
      let dateNow = new Date();
      let timeNow = dateNow.getHours();
      console.log(timeNow);
      // init the partial arrays for next 24 hours
      let partial_apparent_temperature = this.carouselData.apparent_temperature.slice(timeNow, timeNow+24);
      let partial_is_day = this.carouselData.is_day.slice(timeNow, timeNow+24);
      let partial_precipitation_probability = this.carouselData.precipitation_probability.slice(timeNow, timeNow+24);
      let partial_relativehumidity_2m = this.carouselData.relativehumidity_2m.slice(timeNow, timeNow+24);
      let partial_temperature_2m = this.carouselData.temperature_2m.slice(timeNow, timeNow+24);
      let partial_time = this.carouselData.time.slice(timeNow, timeNow+24);
      let partial_weathercode = this.carouselData.weathercode.slice(timeNow, timeNow+24);
      let partial_winddirection_10m = this.carouselData.winddirection_10m.slice(timeNow, timeNow+24);
      let partial_windgusts_10m = this.carouselData.windgusts_10m.slice(timeNow, timeNow+24);
      let partial_windspeed_10m = this.carouselData.windspeed_10m.slice(timeNow, timeNow+24);
      // loop to hidrate the formed data array
      for (let index = 0; index < 24; index++) {
        let formatedData = {
          apparent_temperature: partial_apparent_temperature.at(index),
          is_day: partial_is_day.at(index),
          precipitation_probability: partial_precipitation_probability.at(index),
          relativehumidity_2m: partial_relativehumidity_2m.at(index),
          temperature_2m: partial_temperature_2m.at(index),
          time: partial_time.at(index),
          weathercode: partial_weathercode.at(index),
          winddirection_10m: partial_winddirection_10m.at(index),
          windgusts_10m: partial_windgusts_10m.at(index),
          windspeed_10m: partial_windspeed_10m.at(index),
        }
        this.hourlyData.push(formatedData);
      }
      //
      console.log('#######################');
      console.log(this.hourlyData);
    }
    if(this.carouselType == 'daily'){
      console.log('Daily Carousel On');
      for (let index = 0; index < 7; index++) {
        let formatedData = {
          apparent_temperature_max: this.carouselData.apparent_temperature_max.at(index),
          apparent_temperature_min: this.carouselData.apparent_temperature_min.at(index),
          precipitation_probability_max: this.carouselData.precipitation_probability_max.at(index),
          temperature_2m_max: this.carouselData.temperature_2m_max.at(index),
          temperature_2m_min: this.carouselData.temperature_2m_min.at(index),
          time: this.carouselData.time.at(index),
          weather_code: this.carouselData.weather_code.at(index),
          wind_direction_10m_dominant: this.carouselData.wind_direction_10m_dominant.at(index),
          wind_gusts_10m_max: this.carouselData.wind_gusts_10m_max.at(index),
          wind_speed_10m_max: this.carouselData.wind_speed_10m_max.at(index),
        }
        this.dailyData.push(formatedData);
      }
    }
  }

  ngOnChanges(): void {
    console.log('changes...');
  }

  goToLeft(id:string): any {
    let sliderContainer = document.getElementById(id);
    // console.log(sliderContainer);
    sliderContainer?.scrollBy({
      top: 0,
      left: -120,
      behavior: 'smooth'
    });
    // console.log('Scroll vers la gauche');
  }
  goToRight(id:string): any {
    let sliderContainer = document.getElementById(id);
    // console.log(sliderContainer);
    sliderContainer?.scrollBy({
      top: 0,
      left: 120,
      behavior: 'smooth'
    });
    // console.log('Scroll vers la droite');
  }

}
