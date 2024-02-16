import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { City, Coordinates } from '../../city';
import { Weather } from '../../weather';
import { WeatherToImagePipe } from '../../services/weather-to-image.pipe';
import { BackgroundIsDayOrNightDirective } from '../../services/background-is-day-or-night.directive';
import { coupleDataCityWeather } from '../../duo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [BackgroundIsDayOrNightDirective, WeatherToImagePipe],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnChanges{

  @Input() city!: City | null;
  @Input() weather!: Weather | null;
  @Input() showResult!: boolean;
  @Output() handleLastValues = new EventEmitter<coupleDataCityWeather>();
  @Output() setDetailCity = new EventEmitter<City>();

  backgroundColor: string | undefined;
  textColor: string | undefined;

  localCity!: City | null;
  localWeather!: Weather | null;

  constructor(private router: Router){}

  ngOnChanges(): void {

    if(this.showResult){
      this.localCity = this.city;
      this.localWeather = this.weather;
      let lastValues: coupleDataCityWeather = {
        city : this.localCity,
        weather : this.localWeather
      };
      this.handleLastValues.emit(lastValues);
    }
    if(this.weather && this.city){
      this.backgroundColor = this.weather.current.is_day == 0 ? 'bg_night' : 'bg_day';
      this.textColor = this.weather.current.is_day == 0 ? 'color_night' : 'color_day';
    }

  }

  seeDetail(): void {
    console.log("See details");
    if(this.localCity){
      this.setDetailCity.emit(this.localCity);
    }
    this.router.navigate(['/detail']);
  }

}

