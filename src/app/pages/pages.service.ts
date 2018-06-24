import { environment } from 'environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { ServiceNavigationItem } from 'models/services.interfaces';

const STORAGE_KEY = makeStateKey('mainNavigation');

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private serviceListSource = new BehaviorSubject<ServiceNavigationItem[]>(null);

  constructor(
    private state: TransferState,
    private http: HttpClient) {

    this.serviceListSource.next(this.state.get(STORAGE_KEY, null));
    this.serviceListSource.asObservable()
      .pipe(
        filter(value => !value),
        switchMap(() => this.getBaseServices())
      )
      .subscribe(response => {
        this.serviceListSource.next(response);
        this.state.set(STORAGE_KEY, response);
      });
  }

  getServiceNavigationList(): Observable<ServiceNavigationItem[]> {
    return this.serviceListSource.asObservable().pipe(
      filter(value => !!value)
    );
  }

  getBaseServices(): Observable<ServiceNavigationItem[]> {
    const url = environment.baseApi + `/services`;
    return this.http.get<ServiceNavigationItem[]>(url);
  }

}
