import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PagesService } from '../../pages.service';

import { SubServiceNode, ServiceType } from 'models/services.interfaces';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  serviceTitle?: string;
  subServiceList?: Array<SubServiceNode>;

  constructor(
    private route: ActivatedRoute,
    private pages: PagesService) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        // switchMap(value => this.pages.getNavigationForServiceGroup(value.get('serviceName') as ServiceType)),
        switchMap(value => forkJoin(
          this.pages.getNavigationForServiceGroup(value.get('serviceName') as ServiceType),
          this.pages.getServiceGroup(value.get('serviceName') as ServiceType)
        ))
      )
      .subscribe(([ serviceGroupNavData, serviceGroup ]) => {
        console.log('service group', serviceGroupNavData);
        this.serviceTitle = serviceGroup.title;
        this.subServiceList = serviceGroupNavData.components;
      });
  }

}
