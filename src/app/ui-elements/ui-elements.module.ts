import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { SwiperComponent } from './swiper/swiper.component';

import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PopupMenuComponent,
    SwiperComponent,
    ContactUsComponent
  ],
  exports: [
    PopupMenuComponent,
    SwiperComponent,
    ContactUsComponent
  ]
})
export class UiElementsModule { }
