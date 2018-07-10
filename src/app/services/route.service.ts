import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private db: AngularFirestore) {
  }

  getAll() {
    return this.db.collection('routes').valueChanges();
  }
}
