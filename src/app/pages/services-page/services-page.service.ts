import { environment } from 'environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ServiceNavigationItem } from 'models/services.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService {

  constructor(
    private http: HttpClient) {
  }

  /*getCompanyServices(): Observable<ServiceNavigationItem[]> {
    const url = environment.baseApi + ``;
  }*/

}
