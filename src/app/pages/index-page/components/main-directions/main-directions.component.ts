import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface MainDirection {
  title?: string;
  text?: string;
  directionList: Array<{
    name?: string;
    routerLink?: any[];
    svg?: SafeHtml;
  }>;
}

// tslint:disable max-line-length
const DEF_SVG = `<svg viewBox="0 0 24 24">
<path fill="#333333" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4M12,6.5A1.5,1.5 0 0,1 13.5,8A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 10.5,8A1.5,1.5 0 0,1 12,6.5M12,14.5A1.5,1.5 0 0,0 10.5,16A1.5,1.5 0 0,0 12,17.5A1.5,1.5 0 0,0 13.5,16A1.5,1.5 0 0,0 12,14.5Z" />
</svg>`;

@Component({
  selector: 'app-main-directions',
  templateUrl: './main-directions.component.html',
  styleUrls: ['./main-directions.component.scss']
})
export class MainDirectionsComponent implements OnInit {

  @Input()
  mainDirection?: MainDirection = {
    title: 'Основные направления',
    text: 'Подберите интересующую услугу или <a>запишитесь на консультацию</a>',
    directionList: [
      {
        name: 'Терапия',
        routerLink: ['services', 'therapy'],
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        name: 'Хирургия',
        routerLink: ['services', 'surgery'],
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        name: 'Имплантология',
        routerLink: ['services', 'implantology'],
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        name: 'Ортопедия',
        routerLink: ['services', 'orthopedics'],
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        name: 'Лазерная стоматология',
        routerLink: ['services', 'laser-dentistry'],
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        name: 'Пародонтология',
        routerLink: ['services', 'periodontics'],
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        name: 'Ортодонтия',
        routerLink: ['services', 'orthodontics'],
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        name: 'Эстетическая стоматология',
        routerLink: ['services', 'aesthetic-dentistry'],
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        name: 'Профессиональная гигиена рта',
        routerLink: ['services', 'oral-hygiene'],
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }
    ]
  };

  constructor(
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
