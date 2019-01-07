import { environment } from 'environments/environment';

import { Injectable } from '@angular/core';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { filter, switchMap, first, map, tap } from 'rxjs/operators';

import { ServiceNavigationItem, ServiceType, ServiceGroupDescription, ServiceDescription } from 'models/services.interfaces';

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

  activeServiceGroup?: string;

  constructor(
    private state: TransferState,
    private http: HttpClient) {

    forkJoin(
      this.servicesNavigationList$.pipe(
        filter(value => !value),
        switchMap(() => this.getServiceNavigation()),
        tap(response => this.setServiceNavigation(response)),
      ),
      this.servicesData$.pipe(
        filter(value => !value),
        switchMap(() => this.getServicesData()),
        tap(response => this.setServiceData(response))
      )
    ).subscribe();
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

  getNavigationForServiceGroup(groupName: ServiceType): Observable<ServiceNavigationItem> {
    this.activeServiceGroup = groupName;
    return this.servicesNavigationList$.pipe(
      filter(value => !!value),
      first(),
      map(list => list.find((a => a.type === groupName)))
    );
  }

  getServiceGroup(groupName?: ServiceType): Observable<ServiceGroupDescription> {
    const serviceGroupName = groupName || this.activeServiceGroup;
    return this.servicesData$.pipe(
      filter(value => !!value),
      first(),
      map(groupList => groupList.find(a => a.id === serviceGroupName))
    );
  }

  getService(serviceName: string): Observable<ServiceDescription> {
    console.log('getService: ', this.activeServiceGroup, serviceName);
    return this.getServiceGroup().pipe(
      map(serviceGroup => serviceGroup.components.find(a => a.name === serviceName))
    );

    /*return this.servicesData$.pipe(
      filter(value => !!value),
      first(),
      map(list => {
        return list
          .find(a => a.id === this.activeServiceGroup)
          .components
          .find(a => a.name === serviceName);
      })
    );*/
  }

  private getServiceNavigation(): Observable<ServiceNavigationItem[]> {
    const url = environment.baseApi + `/services/navigation_list`;
    return this.http.get<ServiceNavigationItem[]>(url);
  }

  private getServicesData(): Observable<any> {
    const url = environment.baseApi + `/services/list`;
    return this.http.get(url);
  }

}
