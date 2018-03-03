import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsModule } from '../ui-elements/ui-elements.module';

import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    UiElementsModule
  ],
  declarations: [
    HeaderNavigationComponent
  ],
  exports: [
    HeaderNavigationComponent
  ]
})
export class PagesModule { }
