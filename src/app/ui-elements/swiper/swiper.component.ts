import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import * as Swiper from 'swiper/dist/js/swiper.js';

export interface SwiperOptions {
  slidesPerView?: 'auto';
  loop?: boolean;
  centeredSlides?: boolean;
  spaceBetween?: number;
  pagination?: {
    el: string;
    clickable?: boolean;
    type?: 'progressbar';
  };
  navigation: {
    nextEl: '.swiper-button-next';
    prevEl: '.swiper-button-prev';
  };
}

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, AfterViewInit {

  swiper: Swiper;

  @Input() type?: 'base' | 'custom-progress-pagination' = 'custom-progress-pagination';

  @Input() options: SwiperOptions = {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

    constructor() {
  }

  ngOnInit() {
    // console.log(this.swiper);
  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', this.options);
  }

}
