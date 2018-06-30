import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../../pipes/pipes.module';

import { ServicePageComponent } from './service-page.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServicesNavigatorComponent } from './components/services-navigator/services-navigator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  declarations: [
    ServicePageComponent,
    ServiceDetailComponent,
    ServicesNavigatorComponent
  ]
})
export class ServicesPageModule {
}
