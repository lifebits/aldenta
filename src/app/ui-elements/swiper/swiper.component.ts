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
  navigation?: {
    nextEl: '.swiper-button-next' | '.swiper-custom-next';
    prevEl: '.swiper-button-prev' | '.swiper-custom-prev';
  };
}

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, AfterViewInit {

  swiper: Swiper;

  @Input() defaultNavigation = false;
  @Input() options?: SwiperOptions;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', this.options);
  }

}
