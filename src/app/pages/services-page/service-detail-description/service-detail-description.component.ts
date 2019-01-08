import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { tap, switchMap } from 'rxjs/operators';

import { PagesService } from '../../pages.service';
import { ServiceDescription } from 'models/services.interfaces';

@Component({
  selector: 'app-service-detail-description',
  templateUrl: './service-detail-description.component.html',
  styleUrls: ['./service-detail-description.component.scss']
})
export class ServiceDetailDescriptionComponent implements OnInit {

  part?: string;
  service?: ServiceDescription;

  constructor(
    private route: ActivatedRoute,
    private pages: PagesService) { }

  ngOnInit() {
    this.pages.activeServiceGroup$
      .pipe(
        switchMap(() => this.route.paramMap),
        tap(params => this.part = params.get('servicePart')),
        switchMap(params => this.pages.getService(params.get('servicePart'))),
        tap(value => console.log(555, value))
      )
      .subscribe(value => this.service = value);
  }

}
