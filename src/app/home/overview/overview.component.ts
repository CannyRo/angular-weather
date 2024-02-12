import { Component, Input, OnChanges } from '@angular/core';
import { City, Coordinates } from '../../city';
import { Weather } from '../../weather';
import { WeatherToImagePipe } from '../../services/weather-to-image.pipe';
import { BackgroundIsDayOrNightDirective } from '../../services/background-is-day-or-night.directive';

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

  backgroundColor: string | undefined;
  textColor: string | undefined;

  localCity!: City | null;
  localWeather!: Weather | null;

  ngOnChanges(): void {

    // if(this.weather && this.city){
    //   // console.log('Check if City Coordinates and Weather Coordinates match => ');
    //   this.backgroundColor = this.weather.current.is_day == 0 ? 'bg_night' : 'bg_day';
    //   this.textColor = this.weather.current.is_day == 0 ? 'color_night' : 'color_day';

    //   console.log(this.city.latitude);
    //   console.log(this.weather.latitude);
    //   console.log(this.city.longitude);
    //   console.log(this.weather.longitude);
    //   console.log("= REFRESH = : ",this.showResult);
      
      
    // }
    if(this.showResult){
      this.localCity = this.city;
      this.localWeather = this.weather;
    }
    if(this.weather && this.city){
      // console.log('Check if City Coordinates and Weather Coordinates match => ');
      this.backgroundColor = this.weather.current.is_day == 0 ? 'bg_night' : 'bg_day';
      this.textColor = this.weather.current.is_day == 0 ? 'color_night' : 'color_day';

      console.log(this.city.latitude);
      console.log(this.weather.latitude);
      console.log(this.city.longitude);
      console.log(this.weather.longitude);
      console.log("= REFRESH = : ",this.showResult);
      
      
    }
  }

}

