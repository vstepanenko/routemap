import {Component, OnInit} from '@angular/core';
import {RouteService} from '../services/route.service';
import {firestore} from 'firebase';
import GeoPoint = firestore.GeoPoint;

class RoutePoint {
  geo: GeoPoint;
}

class Route {
  points: RoutePoint[];
  opacity?: number;

  constructor(points: RoutePoint[], opacity: number = 0.4) {
    this.points = points;
    this.opacity = opacity
  }
}

@Component({
  selector: 'route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit {
  show: boolean;
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

  mouseOver(route: Route) {
    route.opacity = 1;
  }

  mouseOut(route: Route) {
    route.opacity = 0.4;
  }

  private updateRoutes(data: any[]) {
    this.routes = data.map(x => new Route(x));
    this.show = true;
    console.log(this.routes);
  }
}
