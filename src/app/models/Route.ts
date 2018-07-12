import {RoutePoint} from './RoutePoint';

export class Route {
  points: RoutePoint[];
  name: string;
  opacity?: number;

  constructor(points: RoutePoint[], name: string, opacity?: number) {
    this.points = points;
    this.name = name;
    if (opacity) {
      this.opacity = opacity
    }
  }
}
