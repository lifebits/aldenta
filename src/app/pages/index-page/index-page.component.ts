import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { IndexPageService } from './index-page.service';

import { IndexPageResponse } from 'models/pages.interface';

const PAGE_KEY = makeStateKey('index');

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  indexPageData?: IndexPageResponse;

  constructor(
    private state: TransferState,
    private indexPage: IndexPageService) {
  }

  ngOnInit() {
    this.indexPageData = this.state.get(PAGE_KEY, null as IndexPageResponse);
    if (!this.indexPageData) {
      this.indexPage.getIndexPage()
        .subscribe(response => {
          this.indexPageData = response;
          this.state.set(PAGE_KEY, response as IndexPageResponse);
        });
    }
  }

}
