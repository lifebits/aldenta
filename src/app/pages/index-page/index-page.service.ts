import { environment } from 'environments/environment';

import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map } from 'rxjs/operators';

import { IndexPageResponse, MainDirectionResponse } from 'models/pages.interface';
import { ReviewsResponse } from 'models/social.interface';

@Injectable()
export class IndexPageService {

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient) {
  }

  getIndexPage(): Observable<IndexPageResponse> {
    return forkJoin(this.getMainDirections()).pipe(
      map(response => {
        const [ mainDirections ] = response;
        return {
          mainDirection: mainDirections
        };
      })
    );
  }

  getMainDirections(): Observable<MainDirectionResponse> {
    const url = environment.baseApi + '/mocks/main-directions.json';
    return this.http.get<MainDirectionResponse>(url);
  }

  getRecentReview(): Observable<ReviewsResponse> {
    const url = environment.baseApi + '/mocks/recent-reviews.json';
    return this.http.get<ReviewsResponse>(url);
  }

}
