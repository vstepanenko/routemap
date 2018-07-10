import {Component, OnInit} from '@angular/core';
import {RouteService} from '../services/route.service';

@Component({
  selector: 'route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit {
  mapConfig = {
    latitude: 33.0,
    longitude: 33.0
  };

  constructor(private routeService: RouteService) {

  }

  ngOnInit() {
    this.routeService.getAll().subscribe(this.updateRoutes)
  }

  private updateRoutes(data: any[]) {
    console.log(data);
  }
}
