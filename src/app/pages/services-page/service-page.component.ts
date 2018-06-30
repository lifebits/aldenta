import { Component, OnInit } from '@angular/core';

import { PagesService } from '../pages.service';

import { ServiceNavigationItem } from 'models/services.interfaces';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {

  companyServices?: Array<ServiceNavigationItem>;

  constructor(
    private pages: PagesService) {

    this.pages.getServiceNavigationList()
      .subscribe(list => {
        this.companyServices = list;
      });
  }

  ngOnInit() {
  }

}
