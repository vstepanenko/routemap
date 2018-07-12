import {RoutePoint} from './RoutePoint';

export class Route {
  points: RoutePoint[];
  id?: string;
  name?: string;
  opacity?: number;

  constructor(points: RoutePoint[], opacity: number = 0.4) {
    this.points = points;
    this.opacity = opacity
  }
}
