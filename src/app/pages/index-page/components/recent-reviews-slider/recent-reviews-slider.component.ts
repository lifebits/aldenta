import { Component, OnInit, Input } from '@angular/core';

import { ReviewsResponse } from 'models/social.interface';

@Component({
  selector: 'app-recent-reviews-slider',
  templateUrl: './recent-reviews-slider.component.html',
  styleUrls: ['./recent-reviews-slider.component.scss']
})
export class RecentReviewsSliderComponent implements OnInit {

  @Input() reviews: ReviewsResponse;

  constructor() {
  }

  ngOnInit() {
  }

}
