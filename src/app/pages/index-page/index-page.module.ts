import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IndexPageComponent } from './index-page.component';
import { SingleBannerComponent } from './components/single-banner/single-banner.component';
import { MainDirectionsComponent } from './components/main-directions/main-directions.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    IndexPageComponent,
    SingleBannerComponent,
    MainDirectionsComponent
  ]
})
export class IndexPageModule { }
