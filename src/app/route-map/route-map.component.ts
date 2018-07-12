import {Component, OnInit} from '@angular/core';
import {RouteService} from '../services/route.service';
import {Route} from '../models/Route';

@Component({
  selector: 'route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit {
  mapConfig = {
    latitude: 38.0,
    longitude: -90.0,
    zoom: 5
  };
  routes: Route[] = [];

  constructor(private routeService: RouteService) {
  }

  ngOnInit() {
    this.routeService.getAll().subscribe(data => this.updateRoutes(data));
  }

  mouseOver(route: Route, infoWindow) {
    route.opacity = 1;
    infoWindow.open();
  }

  mouseOut(route: Route, infoWindow) {
    route.opacity = 0.4;
    infoWindow.close();
  }

  private updateRoutes(data: any[]) {
    this.routes = data.map(x => new Route(x.points, x.name, 0.4));
    console.log(this.routes);
  }
}
