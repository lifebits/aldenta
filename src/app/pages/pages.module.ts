import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { IndexPageModule } from './index-page/index-page.module';

import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    UiElementsModule,
    IndexPageModule
  ],
  declarations: [
    HeaderNavigationComponent
  ],
  exports: [
    HeaderNavigationComponent
  ]
})
export class PagesModule { }
