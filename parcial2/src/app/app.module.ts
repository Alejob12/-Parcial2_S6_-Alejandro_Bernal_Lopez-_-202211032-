
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';
import { RouterModule }         from '@angular/router';

import { AppComponent }         from './app.component';
import { AirlinesModule }       from './airlines/airlines.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '',   redirectTo: 'airlines', pathMatch: 'full' },
      { path: 'airlines', loadChildren: () => import('./airlines/airlines.module').then(m => m.AirlinesModule) }
    ]),
    AirlinesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
