import { Component, OnInit, Input } from '@angular/core';

import { SwiperOptions } from 'app/ui-elements/swiper/swiper.component';

interface Discount {
  imageUrl?: string;
  title?: string;
  text?: string;
}

@Component({
  selector: 'app-discounts-slider',
  templateUrl: './discounts-slider.component.html',
  styleUrls: ['./discounts-slider.component.scss']
})
export class DiscountsSliderComponent implements OnInit {

  @Input() discounts?: Array<Discount>;

  options: SwiperOptions = {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-custom-next',
      prevEl: '.swiper-custom-prev',
    },
  };

  constructor() { }

  ngOnInit() { }

}
