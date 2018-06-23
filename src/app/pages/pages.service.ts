import { environment } from 'environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { ServiceNavigationItem } from 'models/services.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private serviceListSource = new Subject<ServiceNavigationItem[]>();

  constructor(
    private http: HttpClient) {

    this.getBaseServices()
      .subscribe(response => this.serviceListSource.next(response));
  }

  getServiceNavigationList(): Observable<ServiceNavigationItem[]> {
    return this.serviceListSource.asObservable();
  }

  getBaseServices(): Observable<ServiceNavigationItem[]> {
    const url = environment.baseApi + `/services`;
    return this.http.get<ServiceNavigationItem[]>(url);
  }

}
