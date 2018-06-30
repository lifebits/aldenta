import { Component, OnInit } from '@angular/core';

import { CALL_CENTER_PHONE } from '../../pages.constants';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss']
})
export class HeaderLogoComponent implements OnInit {

  readonly phone = CALL_CENTER_PHONE;

  constructor() { }

  ngOnInit() {
  }

}
