import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from './pages/index-page/index-page.component';

import { ServicePageComponent } from './pages/services-page/service-page.component';
import { ServiceDetailComponent } from './pages/services-page/service-detail/service-detail.component';
import { ServiceDetailDescriptionComponent } from './pages/services-page/service-detail-description/service-detail-description.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: 'services',
    component: ServicePageComponent,
    children: [
      {
        path: ':serviceName',
        component: ServiceDetailComponent,
        children: [
          {
            path: '',
            redirectTo: 'consultation',
            pathMatch: 'full',
          },
          {
            path: ':servicePart',
            component: ServiceDetailDescriptionComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
