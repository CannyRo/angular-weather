import { Component, Input, OnChanges } from '@angular/core';
import { City } from '../../city';
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

  backgroundColor: string | undefined;
  textColor: string | undefined;

  ngOnChanges(): void {
    console.log("OnChanges => the city is : ", this.city);
    console.log("OnChanges => the weather is : ", this.weather);
    if(this.weather){
      this.backgroundColor = this.weather.current.is_day == 0 ? 'bg_night' : 'bg_day';
      this.textColor = this.weather.current.is_day == 0 ? 'color_night' : 'color_day';
    }
  }
}
