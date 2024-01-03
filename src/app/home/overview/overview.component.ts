import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { City } from '../../city';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit, OnChanges{

  @Input() city!: City | null;

  ngOnInit(): void {
    console.log("OnInit => the city is : ", this.city);
  }
  ngOnChanges(): void {
    console.log("OnChanges => the city is : ", this.city);
  }
}
