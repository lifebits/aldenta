import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface OurTechnology {
  title: string;
  text?: string;
  technology: Array<Technology>;
}

interface Technology {
  title: string;
  svg: SafeHtml;
}

// tslint:disable max-line-length
const DEF_SVG = `<svg viewBox="0 0 24 24">
<path fill="#333333" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4M12,6.5A1.5,1.5 0 0,1 13.5,8A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 10.5,8A1.5,1.5 0 0,1 12,6.5M12,14.5A1.5,1.5 0 0,0 10.5,16A1.5,1.5 0 0,0 12,17.5A1.5,1.5 0 0,0 13.5,16A1.5,1.5 0 0,0 12,14.5Z" />
</svg>`;

@Component({
  selector: 'app-our-technologies',
  templateUrl: './our-technologies.component.html',
  styleUrls: ['./our-technologies.component.scss']
})
export class OurTechnologiesComponent implements OnInit {

  @Input() technologies: OurTechnology = {
    title: 'Технологии',
    text: 'Вы делаете правильный выбор!',
    technology: [
      {
        title: 'Современные методы лечения',
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        title: 'Бережное лечение без боли',
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        title: 'Анатомическая реставрация',
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      }, {
        title: 'Комплексная имплантация',
        svg: this.sanitizer.bypassSecurityTrustHtml(DEF_SVG)
      },
    ]
  };

  constructor(
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
