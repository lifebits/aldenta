import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap } from 'rxjs/operators';

import { PagesService } from '../../pages.service';

import { SubServiceNode } from 'models/services.interfaces';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  part?: string;
  subServiceList?: Array<SubServiceNode>;

  constructor(
    private route: ActivatedRoute,
    private pages: PagesService) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        tap(value => this.part = value.get('serviceName')),
        switchMap(value => this.pages.getService(value.get('serviceName')))
      )
      .subscribe(service => this.subServiceList = service.components);
  }

}
