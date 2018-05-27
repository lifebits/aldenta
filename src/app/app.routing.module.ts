import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from './pages/index-page/index-page.component';

// import { ServicePageComponent } from './pages/services-page/service-page.component';
// import { ServiceDetailComponent } from './pages/services-page/service-detail/service-detail.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  /*{
    path: 'services',
    component: ServicePageComponent,
    children: [
      // { path: '', component: ServicePageComponent, pathMatch: 'full' },
      { path: ':serviceName', component: ServiceDetailComponent }
    ]
  }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
