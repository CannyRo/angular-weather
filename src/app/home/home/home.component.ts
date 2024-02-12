import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { OverviewComponent } from "../overview/overview.component";
import { FavoriteComponent } from "../favorite/favorite.component";
import { FacadeService } from '../../services/facade.service';
import { CommonModule } from '@angular/common';
import { City, Coordinates } from '../../city';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, SearchBarComponent, OverviewComponent, FavoriteComponent]
})
export class HomeComponent {

    searchTerm$ = this.facade.searchTerm$;
    cities$ = this.facade.cities$;
    city$ = this.facade.city$;
    location$ = this.facade.location$;
    weather$ = this.facade.weather$;

    refresh : boolean = false;

    constructor(private facade: FacadeService){}

    handleSearch(term: string){
        // console.log("handleSearch() from Home");
        this.facade.handleSearch(term);
        this.refresh = false;
    }

    handleCity(cities: City[]){
        // console.log("handleCity() from Home");
        this.facade.handleCity(cities);
        this.refresh = false;
    }

    getWeather(location: Coordinates){
        // console.log("getWeather() from Home");
        this.facade.getWeather(location);
        this.refresh = true;
    }
}
