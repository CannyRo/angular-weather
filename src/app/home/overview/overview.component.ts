import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { City } from '../../city';
import { Weather } from '../../weather';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit, OnChanges{

  @Input() city!: City | null;
  @Input() weather!: Weather | null;

  ngOnInit(): void {
    console.log("OnInit => the city is : ", this.city);
    console.log("OnInit => the weather is : ", this.weather);
  }
  ngOnChanges(): void {
    console.log("OnChanges => the city is : ", this.city);
    console.log("OnChanges => the weather is : ", this.weather);
  }
}
