import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PipesModule } from '../pipes/pipes.module';

import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { SwiperComponent } from './swiper/swiper.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { PopularIssuesComponent } from './popular-issues/popular-issues.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [
    PopupMenuComponent,
    SwiperComponent,
    ContactUsComponent,
    PopularIssuesComponent
  ],
  exports: [
    PopupMenuComponent,
    SwiperComponent,
    ContactUsComponent,
    PopularIssuesComponent
  ]
})
export class UiElementsModule { }
