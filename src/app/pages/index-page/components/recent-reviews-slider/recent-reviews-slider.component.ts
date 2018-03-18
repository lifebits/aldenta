import { Component, OnInit, Input } from '@angular/core';

interface ReviewResponse {
  title?: string;
  subtitle?: string;
  reviews: Array<Review>;
}

interface Review {
  title: string;
  text: string;
  imageUrl: string;
}

@Component({
  selector: 'app-recent-reviews-slider',
  templateUrl: './recent-reviews-slider.component.html',
  styleUrls: ['./recent-reviews-slider.component.scss']
})
export class RecentReviewsSliderComponent implements OnInit {

  @Input() reviews: ReviewResponse = {
    title: 'Отзывы клиентов',
    subtitle: '',
    reviews: [
      {
        title: '',
        text: '',
        imageUrl: ''
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
