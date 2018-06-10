import { Component, OnInit, Input } from '@angular/core';

import { PopularIssuesResponse } from 'models/pages.interface';

@Component({
  selector: 'app-popular-issues',
  templateUrl: './popular-issues.component.html',
  styleUrls: ['./popular-issues.component.scss']
})
export class PopularIssuesComponent implements OnInit {

  @Input() popularIssues?: PopularIssuesResponse;

  constructor() { }

  ngOnInit() {
  }

}
