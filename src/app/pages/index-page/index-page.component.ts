import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { TransferState, makeStateKey } from '@angular/platform-browser';

// import { IndexPageService } from './index-page.service';

import { ReviewsResponse } from 'models/social.interface';

/*interface IndexPageResponse {
  recentReviews?: ReviewsResponse;
}*/

// const PAGE_KEY = makeStateKey('index');

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  indexPageData?: ReviewsResponse;

  constructor(
    // private state: TransferState,
    // private indexPage: IndexPageService,
    private http: HttpClient) {
  }

  ngOnInit() {

    /*this.indexPage.getRecentReview()
      .subscribe(response => {
        this.indexPageData = response;
      });*/

    // this.http.get<ReviewsResponse>('assets/mocks/recent-reviews.json')
    //   .subscribe(result => console.log(result));

    // this.indexPageData = this.state.get(PAGE_KEY, null as any);

    /*if (!this.indexPageData) {
      this.indexPage.getRecentReview()
        .subscribe(response => {
          this.indexPageData = {};
          this.indexPageData.recentReviews = response;
          // this.state.set(PAGE_KEY, response as any);
        });
    }*/
  }

}
