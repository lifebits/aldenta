import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { IndexPageModule } from './index-page/index-page.module';
import { ServicesPageModule } from './services-page/services-page.module';
import { PipesModule } from '../pipes/pipes.module';

import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { FooterBaseComponent } from './components/footer-base/footer-base.component';

import { PagesService } from './pages.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiElementsModule,
    IndexPageModule,
    ServicesPageModule,
    PipesModule
  ],
  declarations: [
    HeaderNavigationComponent,
    HeaderLogoComponent,
    FooterBaseComponent
  ],
  exports: [
    HeaderNavigationComponent,
    HeaderLogoComponent,
    FooterBaseComponent
  ],
  providers: [
    PagesService
  ]
})
export class PagesModule { }
