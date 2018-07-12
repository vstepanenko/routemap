import {firestore} from 'firebase';
import GeoPoint = firestore.GeoPoint;
import Timestamp = firestore.Timestamp;

export class RoutePoint {
  geo: GeoPoint;
  timestamp?: Timestamp;

  constructor(latitude: number, longitude: number, date?: Date) {
    this.geo = new GeoPoint(latitude, longitude);
    this.timestamp = date ? Timestamp.fromDate(date) : Timestamp.now();
  }
}
