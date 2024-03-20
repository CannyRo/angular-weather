import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Daily, DailyUnits, Hourly, HourlyUnits, Weather } from '../../weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnChanges{
  @Input() weather!: Weather | undefined;
  @Input() carouselType!: string | undefined;
  @Input() carouselData!: any | undefined;
  @Input() carouselDataUnit!: any | undefined;
  @Input() background!: string | undefined;
  @Input() text!: string | undefined;
  
// supprimer Weather une fois le nécessaire fait
  hourlyData: any = []; 

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
      // init the partial array
      console.log(this.carouselData);
      let nextHours = this.carouselData.temperature_2m.slice(timeNow, timeNow+24);
      // init the key name
      let propertyTitle: number = timeNow;
      nextHours.map( (temperature:any) =>{
        this.hourlyData.push(
          {
            hour : propertyTitle,
            temperature : temperature
          }
        );
        propertyTitle++;
        propertyTitle = propertyTitle == 24 ? 0 : propertyTitle;
      });
      // //
      // console.log('#######################');
      // console.log(this.hourlyData);
      // console.log(typeof(this.hourlyData));
    }
    if(this.carouselType == 'daily'){
      console.log('Daily Carousel On')
    }
  }

  ngOnChanges(): void {
    console.log('changes...');
  }

  goToLeft(): any {
    let sliderContainer = document.getElementById('wrapper');
    // console.log(sliderContainer);
    sliderContainer?.scrollBy({
      top: 0,
      left: -104,
      behavior: 'smooth'
    });
    // console.log('Scroll vers la gauche');
  }
  goToRight(): any {
    let sliderContainer = document.getElementById('wrapper');
    // console.log(sliderContainer);
    sliderContainer?.scrollBy({
      top: 0,
      left: 104,
      behavior: 'smooth'
    });
    // console.log('Scroll vers la droite');
  }

}
