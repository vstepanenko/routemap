import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteMapComponent} from './route-map/route-map.component';
import {NewRouteComponent} from './new-route/new-route.component';

const appRouting: Routes = [
  {path: '', component: RouteMapComponent},
  {path: 'new', component: NewRouteComponent},
  {path: '**', redirectTo: '/'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouting);
