import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupMenuComponent } from './popup-menu/popup-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopupMenuComponent
  ],
  exports: [
    PopupMenuComponent
  ]
})
export class UiElementsModule { }
