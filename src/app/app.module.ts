import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { RouteMapComponent } from './route-map/route-map.component';
import { RouteService } from './services/route.service';

const config = {
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
    RouteMapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpq3gc1WPr6rWBI3qeB0bVELrxORqX6-4'
    }),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
