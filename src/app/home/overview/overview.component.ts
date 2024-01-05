import { Component, Input, OnChanges } from '@angular/core';
import { City } from '../../city';
import { Weather } from '../../weather';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnChanges{

  @Input() city!: City | null;
  @Input() weather!: Weather | null;

  ngOnChanges(): void {
    console.log("OnChanges => the city is : ", this.city);
    console.log("OnChanges => the weather is : ", this.weather);
  }
}
