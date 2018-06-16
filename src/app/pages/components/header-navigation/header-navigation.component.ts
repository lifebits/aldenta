import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { NavigationItem, MAIN_NAVIGATION_LIST } from '../../pages.constants';

// tslint:disable max-line-length
const DEF_SVG = `<svg height="24" width="24" viewBox="0 0 24 24">
<path d="M0 0h24v24H0z" fill="none"/>
<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
</svg>`;

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

  serviceList: Array<NavigationItem> = [
    {
      title: 'Терапия',
      link: '',
      svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
    }, {
      title: 'Хирургия',
      link: '',
      svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
    }, {
      title: 'Имплантология',
      link: '',
      svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
    }, {
      title: 'Ортопедия',
      link: '',
      svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
    }, {
      title: 'Лазерная стоматология',
      link: '',
      svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
    }, {
      title: 'Пародонтология',
      link: '',
      svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
    }, {
      title: 'Ортодонтия',
      link: '',
      svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
    }, {
      title: 'Эстетическая стоматология',
      link: '',
      svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
    }, {
      title: 'Услуги профессиональной гигиены рта',
      link: '',
      svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
    }
  ];

  navigationList: Array<NavigationItem> = MAIN_NAVIGATION_LIST;

  constructor(
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
