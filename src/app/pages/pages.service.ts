import { environment } from 'environments/environment';

import { Injectable } from '@angular/core';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap, first, map } from 'rxjs/operators';

import { ServiceNavigationItem, ServiceType } from 'models/services.interfaces';

const SERVICE_LIST_STORAGE_KEY: StateKey<ServiceNavigationItem[]> = makeStateKey('mainNavigation');

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private serviceListSource = new BehaviorSubject<ServiceNavigationItem[]>(
    this.state.get(SERVICE_LIST_STORAGE_KEY, null)
  );
  serviceList$ = this.serviceListSource.asObservable();

  constructor(
    private state: TransferState,
    private http: HttpClient) {

    this.serviceList$
      .pipe(
        filter(value => !value),
        switchMap(() => this.getBaseServices())
      )
      .subscribe(response => {
        this.serviceListSource.next(response);
        this.state.set(SERVICE_LIST_STORAGE_KEY, response);
      });
  }

  getServiceNavigationList(): Observable<ServiceNavigationItem[]> {
    return this.serviceList$.pipe(
      filter(value => !!value),
      first()
    );
  }

  getService(type: ServiceType): Observable<ServiceNavigationItem> {
    return this.serviceList$.pipe(
      filter(value => !!value),
      first(),
      map(list => list.find((a => a.type === type)))
    );
  }

  private getBaseServices(): Observable<ServiceNavigationItem[]> {
    const url = environment.baseApi + `/services`;
    return this.http.get<ServiceNavigationItem[]>(url);
  }

}
