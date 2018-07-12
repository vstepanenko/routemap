import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Route} from '../models/Route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private routeCollection: AngularFirestoreCollection<Route>;

  constructor(private afs: AngularFirestore) {
    this.routeCollection = afs.collection<Route>('routes');
  }

  getAll(): Observable<Route[]> {
    return this.routeCollection.valueChanges();
  }

  addRoute(route: Route) {
    return this.routeCollection.add(route);
  }
}
