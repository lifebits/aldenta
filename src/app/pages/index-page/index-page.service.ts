import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ReviewsResponse } from 'models/social.interface';

@Injectable()
export class IndexPageService {

  constructor(
    private http: HttpClient) {
  }

  getRecentReview(): Observable<ReviewsResponse> {
    const url = 'assets/mocks/recent-reviews.json';
    return this.http.get<ReviewsResponse>(url);
  }

}
