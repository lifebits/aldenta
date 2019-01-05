import { environment } from 'environments/environment';

import { Injectable } from '@angular/core';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap, first, map } from 'rxjs/operators';

import { ServiceNavigationItem, ServiceType } from 'models/services.interfaces';

const SERVICE_LIST_STORAGE_KEY: StateKey<ServiceNavigationItem[]> = makeStateKey('serviceNavigation');
const SERVICES_DATA_STORAGE_KEY: StateKey<any[]> = makeStateKey('serviceData');

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private servicesNavigationListSource = new BehaviorSubject<ServiceNavigationItem[]>(
    this.state.get(SERVICE_LIST_STORAGE_KEY, null)
  );
  servicesNavigationList$ = this.servicesNavigationListSource.asObservable();

  private servicesDataSource = new BehaviorSubject(
    this.state.get(SERVICES_DATA_STORAGE_KEY, null)
  );
  servicesData$ = this.servicesDataSource.asObservable();

  constructor(
    private state: TransferState,
    private http: HttpClient) {

    this.servicesNavigationList$
      .pipe(
        filter(value => !value),
        switchMap(() => this.getServiceNavigationData())
      )
      .subscribe(response => this.setServiceNavigation(response));
  }

  setServiceNavigation(value: Array<ServiceNavigationItem>): void {
    this.servicesNavigationListSource.next(value);
    this.state.set(SERVICE_LIST_STORAGE_KEY, value);
  }

  setServiceData(value): void {
    this.servicesDataSource.next(value);
    this.state.set(SERVICES_DATA_STORAGE_KEY, value);
  }

  getServiceNavigationList(): Observable<ServiceNavigationItem[]> {
    return this.servicesNavigationList$.pipe(
      filter(value => !!value),
      first()
    );
  }

  // save active group
  getServiceGroup(group: ServiceType): Observable<ServiceNavigationItem> {
    return this.servicesNavigationList$.pipe(
      filter(value => !!value),
      first(),
      map(list => list.find((a => a.type === group)))
    );
  }

  getService(groupName: ServiceType, serviceName: string): Observable<any> {
    return this.servicesData$.pipe(
      first()
    );
  }

  private getServiceNavigationData(): Observable<ServiceNavigationItem[]> {
    const url = environment.baseApi + `/services/navigation_list`;
    return this.http.get<ServiceNavigationItem[]>(url);
  }

  // call into service-detail page
  getServicesData(): Observable<any> {
    const url = environment.baseApi + `/services/list`;
    return this.http.get(url);
  }

}
