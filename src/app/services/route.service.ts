import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {combineLatest, Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private routeCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.routeCollection = afs.collection('routes');
  }

  getAll(): Observable<any> {
    return this.routeCollection.snapshotChanges().pipe(
      mergeMap(routes => {
        const routeMap = routes.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
        console.log(routeMap);
        const items: Observable<any>[] = [];
        routeMap.forEach(x => items.push(this.afs.collection('routes/' + x.id + '/points').valueChanges()));
        return combineLatest(...items);
      })
    )
  }
}
