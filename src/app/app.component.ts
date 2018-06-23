import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { PagesService } from 'app/pages/pages.service';

import { ServiceNavigationItem } from 'models/services.interfaces';

const PAGE_KEY = makeStateKey('mainNavigation');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  serviceNavigation?: Array<ServiceNavigationItem>;

  constructor(
    private state: TransferState,
    private pages: PagesService) {
  }

  ngOnInit() {
    this.serviceNavigation = this.state.get(PAGE_KEY, null);
    if (!this.serviceNavigation) {
      this.pages.getServiceNavigationList()
        .subscribe(response => {
          console.log(222, response);
          this.serviceNavigation = response;
          this.state.set(PAGE_KEY, response);
        });
    }
  }

}
