import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderNavigationComponent
  ],
  exports: [
    HeaderNavigationComponent
  ]
})
export class PagesModule { }
