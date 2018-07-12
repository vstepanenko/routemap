import {Component, OnInit} from '@angular/core';
import {RouteService} from '../services/route.service';
import {RoutePoint} from '../models/RoutePoint';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {
  mapConfig = {
    latitude: 35.0,
    longitude: 15.0
  };
  name: string;
  points: RoutePoint[];

  constructor(private routeService: RouteService, private router: Router) {
  }

  ngOnInit() {
  }

  mapClick(event) {
    console.log(event);
  }

  save() {
    this.router.navigate(['/']);
  }
}
