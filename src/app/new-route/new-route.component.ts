import {Component, OnInit} from '@angular/core';
import {RouteService} from '../services/route.service';
import {RoutePoint} from '../models/RoutePoint';
import {Router} from '@angular/router';
import {firestore} from 'firebase';
import GeoPoint = firestore.GeoPoint;


@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {
  mapConfig = {
    latitude: 38.0,
    longitude: -90.0,
    zoom: 5
  };
  name: string;
  points: RoutePoint[] = [];

  constructor(private routeService: RouteService, private router: Router) {
  }

  ngOnInit() {
  }

  mapClick(event: any) {
    this.points.push(new RoutePoint(event.coords.lat, event.coords.lng, new Date()))
  }

  save() {
    if (this.name && this.points.length > 1) {
      const route = {
        name: this.name,
        points: this.points.map(x => {
          return {
            geo: new GeoPoint(x.geo.latitude, x.geo.longitude),
            timestamp: x.timestamp
          }
        })
      };
      this.routeService.addRoute(route).then(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
