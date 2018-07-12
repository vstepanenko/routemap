import {Component, OnInit} from '@angular/core';
import {RouteService} from '../services/route.service';
import {Route} from '../models/Route';
import {firestore} from 'firebase';
import GeoPoint = firestore.GeoPoint;

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
    this.routes = data.map(x => new Route(x));
    console.log(this.routes);
  }
}
