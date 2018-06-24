import { Component, OnInit } from '@angular/core';

import { PagesService } from 'app/pages/pages.service';
import { ServiceNavigationItem } from 'models/services.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  serviceNavigation?: Array<ServiceNavigationItem>;

  constructor(
    private pages: PagesService) {
  }

  ngOnInit() {
    this.pages.getServiceNavigationList()
      .subscribe(response => this.serviceNavigation = response);
  }

}
