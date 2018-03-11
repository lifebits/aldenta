import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { SwiperComponent } from './swiper/swiper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopupMenuComponent,
    SwiperComponent
  ],
  exports: [
    PopupMenuComponent,
    SwiperComponent
  ]
})
export class UiElementsModule { }
