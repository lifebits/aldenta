import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../../pipes/pipes.module';

import { ServicePageComponent } from './service-page.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceDetailDescriptionComponent } from './service-detail-description/service-detail-description.component';
import { ServicesNavigatorComponent } from './components/services-navigator/services-navigator.component';
import { ServicesSubNavigatorComponent } from './components/services-sub-navigator/services-sub-navigator.component';
import { ServiceCostComponent } from './components/service-cost/service-cost.component';
import { ServiceMainDescriptionComponent } from './components/service-main-description/service-main-description.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  declarations: [
    ServicePageComponent,
    ServiceDetailComponent,
    ServiceDetailDescriptionComponent,
    ServicesNavigatorComponent,
    ServicesSubNavigatorComponent,
    ServiceCostComponent,
    ServiceMainDescriptionComponent
  ]
})
export class ServicesPageModule {
}
