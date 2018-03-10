import { Component, OnInit, Input } from '@angular/core';

export interface BannerData {
  title: string;
  text: string;
  btnTitle?: string;
  btnLnk?: string;
  imgUrl?: string;
}

@Component({
  selector: 'app-single-banner',
  templateUrl: './single-banner.component.html',
  styleUrls: ['./single-banner.component.scss']
})
export class SingleBannerComponent implements OnInit {

  @Input() data: BannerData = {
    title: 'Красноярская сеть стоматологических клиник',
    text: 'Мы единственная сеть стоматологических клиник в Красноярске, которая дает до 7ми лет гарантии на свои работы',
    btnTitle: 'Узнать подробнее'
  };

  constructor() { }

  ngOnInit() {
  }

}
