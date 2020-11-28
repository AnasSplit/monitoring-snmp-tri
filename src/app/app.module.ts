import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  { path: '', component: MonitoringComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MonitoringComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
