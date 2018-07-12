import * as firebase from 'firebase/app';

export class RoutePoint {
  geo: firebase.firestore.GeoPoint;
  timestamp?: firebase.firestore.Timestamp;

  constructor(latitude: number, longitude: number, date?: Date) {
    this.geo = new firebase.firestore.GeoPoint(latitude, longitude);
    this.timestamp = date ? firebase.firestore.Timestamp.fromDate(date) : firebase.firestore.Timestamp.now();
  }
}
