import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { RouteMapComponent } from './route-map/route-map.component';
import { RouteService } from './services/route.service';
import { NewRouteComponent } from './new-route/new-route.component';
import { routing } from './app.routing';

const firebaseConfig = {
  apiKey: "AIzaSyBpq3gc1WPr6rWBI3qeB0bVELrxORqX6-4",
  authDomain: "routemap-d0405.firebaseapp.com",
  databaseURL: "https://routemap-d0405.firebaseio.com",
  projectId: "routemap-d0405",
  storageBucket: "routemap-d0405.appspot.com",
  messagingSenderId: "960862474702"
};

@NgModule({
  declarations: [
    AppComponent,
    RouteMapComponent,
    NewRouteComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpq3gc1WPr6rWBI3qeB0bVELrxORqX6-4'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
