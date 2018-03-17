import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SpeakingData {
  title: string;
  subtitle: string;
  text: SafeHtml;
}

// tslint:disable max-line-length
const TEXT = `
<p>
Прошло более 10 лет с тех пор как распахнула двери первая клиника Стоматологического Центра Города. За это время более 50 тысяч человек стали нашими пациентами и с большинством из них мы сотрудничаем и по сей день.
Первый центр создавался как авторская клиника командой единомышленников, которые привнесли свои наработки, практический опыт и огромное желание помочь решить проблемы обратившихся к нам людей и сделать их улыбки не только красивыми, но и поистине счастливыми.
</p>
`;

@Component({
  selector: 'app-speaking-of-clients',
  templateUrl: './speaking-of-clients.component.html',
  styleUrls: ['./speaking-of-clients.component.scss']
})
export class SpeakingOfClientsComponent implements OnInit {

  expandedMode = false;

  @Input() data: SpeakingData = {
    title: 'Стоматология "Альдента"',
    subtitle: 'Главный врач клиники Попова Вероника Владимировна',
    text: this.sanitizer.bypassSecurityTrustHtml(TEXT)
  };

  constructor(
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
