import { environment } from 'environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { IndexPageResponse } from 'models/pages.interface';
import { ReviewsResponse } from 'models/social.interface';

@Injectable()
export class IndexPageService {

  constructor(
    private http: HttpClient) {
  }

  getIndexPage() {
    const url = '';
  }

  getRecentReview(): Observable<ReviewsResponse> {
    const url = environment.baseApi + '/mocks/recent-reviews.json';
    return this.http.get<ReviewsResponse>(url);
  }

}
