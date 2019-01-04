import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap } from 'rxjs/operators';

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
        // tap(value => this.serviceTitle = value.get('serviceName') as ServiceType),
        switchMap(value => this.pages.getService(value.get('serviceName') as ServiceType))
      )
      .subscribe(service => {
        this.serviceTitle = service.title;
        this.subServiceList = service.components;
      });
  }

}
