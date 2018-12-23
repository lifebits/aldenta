import { Component, OnInit, Input } from '@angular/core';

import { SubServiceNode } from 'models/services.interfaces';

@Component({
  selector: 'app-services-sub-navigator',
  templateUrl: './services-sub-navigator.component.html',
  styleUrls: ['./services-sub-navigator.component.scss']
})
export class ServicesSubNavigatorComponent implements OnInit {

  @Input() items: Array<SubServiceNode>;

  constructor() { }

  ngOnInit() {
  }

}
