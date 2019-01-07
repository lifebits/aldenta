import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { tap, switchMap, filter } from 'rxjs/operators';

import { PagesService } from '../../pages.service';
import { ServiceDescription } from 'models/services.interfaces';

@Component({
  selector: 'app-service-detail-description',
  templateUrl: './service-detail-description.component.html',
  styleUrls: ['./service-detail-description.component.scss']
})
export class ServiceDetailDescriptionComponent implements OnInit {

  part?: string;
  // service?: ServiceDescription;

  serviceGroup?: string;

  constructor(
    private route: ActivatedRoute,
    private pages: PagesService) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        tap(params => this.part = params.get('servicePart')),
        switchMap(params => this.pages.getService(params.get('servicePart'))),
        filter(value => !!value)
      )
      .subscribe(value => {
        console.log(555, value);
        this.serviceGroup = value.title;
      });
      // .subscribe(params => this.part = params.get('servicePart'));
  }

}
