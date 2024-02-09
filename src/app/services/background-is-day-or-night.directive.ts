import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Weather } from '../weather';

@Directive({
  selector: '[isDayOrNight]',
  standalone: true
})
export class BackgroundIsDayOrNightDirective implements OnInit{

  @Input('weather') weather: Weather | undefined;
  constructor(private el : ElementRef) { }

  ngOnInit(): void {
    this.setBackground(this.weather?.current.is_day);
  }

  setBackground(num: number | undefined){
    if(num === 0){
      this.el.nativeElement.style.backgroundColor = "#0C0B46";
      this.el.nativeElement.style.color = "#fff";
    }
    if(num === 1){
      this.el.nativeElement.style.backgroundColor = "#8AC6FF";
    }
  }

}
