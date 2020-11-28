import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { AboutComponent } from './about/about.component';
import { HostsComponent } from './hosts/hosts.component';
import { ServicesComponent } from './services/services.component';

const appRoutes: Routes = [
  {path: 'hosts', component: HostsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'about', component: AboutComponent},
  { path: '', component: MonitoringComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MonitoringComponent,
    AboutComponent,
    HostsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
