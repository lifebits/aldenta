import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { ServiceNavigationItem } from 'models/services.interfaces';

@Component({
  selector: 'app-services-navigator',
  templateUrl: './services-navigator.component.html',
  styleUrls: ['./services-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesNavigatorComponent implements OnInit {

  @Input() services: Array<ServiceNavigationItem>;

  constructor() { }

  ngOnInit() {

  }

}
