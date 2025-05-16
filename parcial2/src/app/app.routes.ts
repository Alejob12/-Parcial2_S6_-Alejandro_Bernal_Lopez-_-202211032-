import { Routes } from '@angular/router';
import { AirlineListComponent }   from './airlines/airline-list/airline-list.component';
import { AirlineDetailComponent } from './airlines/airline-detail/airline-detail.component';
import { AirlineFlightsComponent } from './airlines/airline-flights/airline-flights.component';

export const appRoutes: Routes = [
  { path: '',              redirectTo: 'airlines', pathMatch: 'full' },
  { path: 'airlines',      component: AirlineListComponent },
  { path: 'airlines/:id',  component: AirlineDetailComponent },
  { path: 'airlines/:id/flights', component: AirlineFlightsComponent },
  { path: '**',            redirectTo: 'airlines' }
];