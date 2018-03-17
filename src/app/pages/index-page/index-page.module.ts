import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiElementsModule } from '../../ui-elements/ui-elements.module';

import { IndexPageComponent } from './index-page.component';
import { SingleBannerComponent } from './components/single-banner/single-banner.component';
import { MainDirectionsComponent } from './components/main-directions/main-directions.component';
import { DiscountsSliderComponent } from './components/discounts-slider/discounts-slider.component';
import { OurTechnologiesComponent } from './components/our-technologies/our-technologies.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiElementsModule
  ],
  declarations: [
    IndexPageComponent,
    SingleBannerComponent,
    MainDirectionsComponent,
    DiscountsSliderComponent,
    OurTechnologiesComponent
  ]
})
export class IndexPageModule { }
