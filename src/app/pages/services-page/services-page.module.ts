import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ServicePageComponent } from './service-page.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ServicePageComponent,
    ServiceDetailComponent
  ]
})
export class ServicesPageModule {
}
